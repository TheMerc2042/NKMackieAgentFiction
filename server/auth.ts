import { Express, Request, Response, NextFunction } from "express";
import session from "express-session";
import { storage } from "./storage";
import MemoryStore from "memorystore";
import "./types";

// In a production app, we'd use a proper database store
const MemoryStoreSession = MemoryStore(session);

export function setupAuthMiddleware(app: Express) {
  // Set up session middleware
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "nk-mackie-author-secret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: process.env.NODE_ENV === "production",
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
      },
      store: new MemoryStoreSession({
        checkPeriod: 86400000, // 24 hours
      }),
    })
  );
  // Session typing is imported from ./types.ts
}

// Middleware to check if user is authenticated
export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

// Middleware to check if user is admin
export async function isAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  try {
    const user = await storage.getUser(req.session.userId);
    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: "Forbidden: Admin access required" });
    }
    next();
  } catch (error) {
    console.error("Admin check error:", error);
    return res.status(500).json({ message: "Error checking admin status" });
  }
}
