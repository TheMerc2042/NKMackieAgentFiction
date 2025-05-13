import { useState } from "react";
import { navigate } from "wouter/use-browser-location";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLoginModal = ({ isOpen, onClose }: AdminLoginModalProps) => {
  const { toast } = useToast();
  
  const googleLogin = useMutation({
    mutationFn: async () => {
      // In a real implementation, we would use the Google OAuth API
      // Instead, we're simulating the flow with a direct API call
      return await apiRequest("POST", "/api/auth/google-login", {});
    },
    onSuccess: () => {
      toast({
        title: "Login Successful",
        description: "You are now logged in as admin.",
      });
      onClose();
      navigate("/admin");
    },
    onError: (error) => {
      toast({
        title: "Login Failed",
        description: error.message || "Unable to login. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleGoogleLogin = () => {
    googleLogin.mutate();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
        <DialogHeader>
          <DialogTitle className="font-montserrat text-xl font-bold text-navy mb-2">
            Admin Login
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Sign in with your Google account to access the admin dashboard and manage your email list.
          </DialogDescription>
        </DialogHeader>
        
        <div className="my-6">
          <Button
            onClick={handleGoogleLogin}
            className="w-full bg-white border border-gray-300 text-gray-700 font-montserrat py-3 px-6 rounded-md shadow-sm hover:shadow-md transition duration-300 flex items-center justify-center"
            disabled={googleLogin.isPending}
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            {googleLogin.isPending ? "Signing in..." : "Sign in with Google"}
          </Button>
        </div>
        
        <p className="text-gray-500 text-sm text-center">
          This login is for site administrators only.
        </p>
      </DialogContent>
    </Dialog>
  );
};
