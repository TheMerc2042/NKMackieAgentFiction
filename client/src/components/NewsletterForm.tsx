import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscriptionMutation = useMutation({
    mutationFn: (email: string) =>
      apiRequest("POST", "/api/newsletter/subscribe", { email }),
    onSuccess: () => {
      setEmail("");
      toast({
        title: "Success!",
        description: "Thank you for joining our newsletter! Keep an eye out for our next update.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      subscriptionMutation.mutate(email);
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 font-montserrat">Join the Newsletter</h2>
        <p className="text-navy-200">Subscribe to get our latest content by email.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-white text-black"
          disabled={subscriptionMutation.isPending}
        />
        <Button
          type="submit"
          disabled={subscriptionMutation.isPending || !email.trim()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6"
        >
          {subscriptionMutation.isPending ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
      
      <p className="text-xs text-navy-300 text-center mt-4">
        We won't send you spam. Unsubscribe at any time.
      </p>
    </Card>
  );
};

export default NewsletterForm;