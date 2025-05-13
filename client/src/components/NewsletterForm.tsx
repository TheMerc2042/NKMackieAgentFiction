import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { SuccessModal } from "@/components/SuccessModal";

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type SubscribeFormValues = z.infer<typeof subscribeSchema>;

const NewsletterForm = () => {
  const { toast } = useToast();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  
  const form = useForm<SubscribeFormValues>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
    },
  });
  
  const subscribeNewsletter = useMutation({
    mutationFn: (data: SubscribeFormValues) => 
      apiRequest("POST", "/api/newsletter/subscribe", data),
    onSuccess: () => {
      form.reset();
      setIsSuccessModalOpen(true);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  const onSubmit = (data: SubscribeFormValues) => {
    subscribeNewsletter.mutate(data);
  };
  
  return (
    <>
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <Input
                    placeholder="Your email address"
                    className="bg-white/10 border border-white/30 text-white placeholder:text-white/50 px-4 py-3 h-12 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="bg-teal hover:bg-teal-light text-navy font-montserrat font-bold py-3 px-6 h-12 rounded-md transition duration-300"
            disabled={subscribeNewsletter.isPending}
          >
            {subscribeNewsletter.isPending ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </Form>
      
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        title="Thank You!"
        description="You've successfully joined N.K. Mackie's newsletter. Watch your inbox for exclusive content, behind-the-scenes insights, and special announcements about upcoming releases."
      />
    </>
  );
};

export default NewsletterForm;
