import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuthMiddleware, isAuthenticated, isAdmin } from "./auth";
import {
  insertSubscriberSchema,
  insertContactSchema,
} from "@shared/schema";
import { validateEmail } from "@shared/utils";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication middleware
  setupAuthMiddleware(app);
  
  // Auth routes
  app.post("/api/auth/google-login", async (req: Request, res: Response) => {
    try {
      // In a real app, this would validate Google OAuth token
      // For this example, we'll simulate success
      const user = await storage.getUserByGoogleId("mock-google-id");
      if (user) {
        req.session.userId = user.id;
        return res.status(200).json({ success: true });
      }
      
      // Create a new user if not found (simulated for this example)
      const newUser = await storage.createUser({
        username: "admin",
        password: "", // Would be null for OAuth users
        email: "admin@example.com",
        googleId: "mock-google-id",
        isAdmin: true
      });
      
      req.session.userId = newUser.id;
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ message: "Authentication failed" });
    }
  });
  
  app.post("/api/auth/logout", (req: Request, res: Response) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Failed to logout" });
      }
      res.clearCookie("connect.sid");
      return res.status(200).json({ success: true });
    });
  });
  
  app.get("/api/auth/check", isAuthenticated, async (req: Request, res: Response) => {
    try {
      const user = await storage.getUser(req.session.userId!);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      return res.status(200).json({ 
        id: user.id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin
      });
    } catch (error) {
      console.error("Auth check error:", error);
      return res.status(500).json({ message: "Authentication check failed" });
    }
  });
  
  // Newsletter subscription
  app.post("/api/newsletter/subscribe", async (req: Request, res: Response) => {
    try {
      const result = insertSubscriberSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid subscriber data" });
      }
      
      const { email } = result.data;
      
      // Validate email format
      if (!validateEmail(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      
      // Check if subscriber already exists
      const existingSubscriber = await storage.getSubscriberByEmail(email);
      if (existingSubscriber) {
        return res.status(200).json(existingSubscriber); // Already subscribed
      }
      
      // Create new subscriber
      const newSubscriber = await storage.createSubscriber({
        email,
        active: true
      });
      
      return res.status(201).json(newSubscriber);
    } catch (error) {
      console.error("Subscription error:", error);
      return res.status(500).json({ message: "Failed to process subscription" });
    }
  });
  
  // Contact form submission
  app.post("/api/contact/submit", async (req: Request, res: Response) => {
    try {
      const result = insertContactSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid contact data" });
      }
      
      const { name, email, subject, message } = result.data;
      
      // Validate email format
      if (!validateEmail(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      
      // Create new contact message
      const newContact = await storage.createContact({
        name,
        email,
        subject,
        message
      });
      
      return res.status(201).json({ success: true, id: newContact.id });
    } catch (error) {
      console.error("Contact submission error:", error);
      return res.status(500).json({ message: "Failed to submit contact form" });
    }
  });
  
  // Admin routes - protected by isAdmin middleware
  app.get("/api/admin/subscribers", isAdmin, async (req: Request, res: Response) => {
    try {
      const subscribers = await storage.getSubscribers();
      return res.status(200).json(subscribers);
    } catch (error) {
      console.error("Get subscribers error:", error);
      return res.status(500).json({ message: "Failed to retrieve subscribers" });
    }
  });
  
  app.delete("/api/admin/subscribers/:id", isAdmin, async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid subscriber ID" });
      }
      
      const success = await storage.deleteSubscriber(id);
      if (!success) {
        return res.status(404).json({ message: "Subscriber not found" });
      }
      
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Delete subscriber error:", error);
      return res.status(500).json({ message: "Failed to delete subscriber" });
    }
  });
  
  app.get("/api/admin/contacts", isAdmin, async (req: Request, res: Response) => {
    try {
      const contacts = await storage.getContacts();
      return res.status(200).json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      return res.status(500).json({ message: "Failed to retrieve contacts" });
    }
  });
  
  app.patch("/api/admin/contacts/:id/read", isAdmin, async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid contact ID" });
      }
      
      const success = await storage.markContactAsRead(id);
      if (!success) {
        return res.status(404).json({ message: "Contact not found" });
      }
      
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Mark contact as read error:", error);
      return res.status(500).json({ message: "Failed to mark contact as read" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
