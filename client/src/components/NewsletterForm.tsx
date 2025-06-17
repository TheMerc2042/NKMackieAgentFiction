import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { validateEmail } from "@/lib/utils";

interface NewsletterFormData {
  email: string;
}

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscribeMutation = useMutation({
    mutationFn: (data: NewsletterFormData) =>
      apiRequest("/api/newsletter/subscribe", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for joining our newsletter! Keep an eye out for updates.",
        variant: "default",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    subscribeMutation.mutate({ email: email.trim() });
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Join the Newsletter</h2>
        <p className="text-gray-600">Subscribe to get our latest content by email.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button 
            type="submit" 
            disabled={subscribeMutation.isPending}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6"
          >
            {subscribeMutation.isPending ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
      </form>
      
      <p className="text-sm text-gray-500 text-center mt-4">
        We won't send you spam. Unsubscribe at any time.
      </p>
    </div>
  );
}