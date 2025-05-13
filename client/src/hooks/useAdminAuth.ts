import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export const useAdminAuth = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Check if user is authenticated
  const { data, isLoading } = useQuery({
    queryKey: ["/api/auth/check"],
    queryFn: getQueryFn({ on401: "returnNull" }),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  
  useEffect(() => {
    if (data) {
      setIsAuthenticated(true);
    } else if (!isLoading) {
      setIsAuthenticated(false);
    }
  }, [data, isLoading]);
  
  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: () => apiRequest("POST", "/api/auth/logout", {}),
    onSuccess: () => {
      setIsAuthenticated(false);
      queryClient.invalidateQueries({ queryKey: ["/api/auth/check"] });
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of the admin area",
      });
    },
    onError: (error) => {
      toast({
        title: "Logout failed",
        description: error.message || "Something went wrong",
        variant: "destructive",
      });
    },
  });
  
  // Login with Google (in a real implementation this would redirect to Google OAuth)
  const loginWithGoogle = async () => {
    // This is a simplified version for the scope of this project
    // In a real implementation, this would use Google's OAuth flow
    try {
      await apiRequest("POST", "/api/auth/google-login", {});
      queryClient.invalidateQueries({ queryKey: ["/api/auth/check"] });
      setIsAuthenticated(true);
      return true;
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error.message || "Failed to login with Google",
        variant: "destructive",
      });
      return false;
    }
  };
  
  const logout = () => {
    logoutMutation.mutate();
  };
  
  return {
    isAuthenticated,
    isLoading,
    loginWithGoogle,
    logout,
  };
};

// Helper function to handle unauthorized responses
function getQueryFn<T>({ on401 }: { on401: "returnNull" | "throw" }) {
  return async ({ queryKey }: { queryKey: string[] }) => {
    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (on401 === "returnNull" && res.status === 401) {
      return null;
    }

    if (!res.ok) {
      const text = (await res.text()) || res.statusText;
      throw new Error(`${res.status}: ${text}`);
    }
    
    return await res.json() as T;
  };
}
