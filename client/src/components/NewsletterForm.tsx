import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { validateEmail } from "@/lib/utils";
import { apiRequest } from "@/lib/queryClient";

interface NewsletterFormProps {
  className?: string;
}

export const NewsletterForm = ({ className = "" }: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: (email: string) => 
      apiRequest("POST", "/api/newsletter/subscribe", { email }),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for joining our newsletter!",
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
    onSettled: () => {
      setIsSubmitting(false);
    }
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

    setIsSubmitting(true);
    mutation.mutate(email);
  };

  return (
    <div className={`max-w-md mx-auto p-6 bg-gray-50 rounded-lg border ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Join the Newsletter
        </h3>
        <p className="text-gray-600 text-lg">
          Subscribe to get our latest content by email.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            disabled={isSubmitting}
            required
          />
          <Button 
            type="submit" 
            disabled={isSubmitting || !email.trim()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
      </form>
      
      <p className="text-sm text-gray-500 text-center mt-4">
        We won't send you spam. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterForm;