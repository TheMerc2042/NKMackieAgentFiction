import { useState, useEffect } from "react";
import { navigate } from "wouter/use-browser-location";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Download, Trash2, Search, LogOut } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { formatDate } from "@/lib/utils";

const Admin = () => {
  const { isAuthenticated, logout } = useAdminAuth();
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);
  
  // Fetch subscribers
  const { data: subscribers, isLoading, error } = useQuery({
    queryKey: ["/api/admin/subscribers"],
    enabled: isAuthenticated,
  });
  
  // Delete subscriber mutation
  const deleteSubscriber = useMutation({
    mutationFn: (id: number) => apiRequest("DELETE", `/api/admin/subscribers/${id}`, {}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/subscribers"] });
    },
  });
  
  // Export subscribers
  const exportSubscribers = () => {
    if (!subscribers || subscribers.length === 0) return;
    
    const csvData = [
      ["Email", "Subscribed Date"],
      ...subscribers.map((sub: any) => [
        sub.email,
        new Date(sub.createdAt).toLocaleDateString()
      ])
    ]
    .map(row => row.join(","))
    .join("\n");
    
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nk-mackie-subscribers-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };
  
  // Filter subscribers by search term
  const filteredSubscribers = subscribers?.filter((sub: any) => 
    sub.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (!isAuthenticated) {
    return null; // Will redirect
  }
  
  return (
    <div className="py-12 bg-off-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-montserrat text-3xl font-bold text-navy">Admin Dashboard</h1>
            <p className="text-gray-600">Manage your website content and subscribers</p>
          </div>
          <Button 
            variant="outline" 
            className="border-navy text-navy hover:bg-navy hover:text-white"
            onClick={logout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
        
        <Tabs defaultValue="subscribers" className="space-y-6">
          <TabsList className="bg-white border">
            <TabsTrigger value="subscribers">Email Subscribers</TabsTrigger>
            <TabsTrigger value="contacts">Contact Messages</TabsTrigger>
            <TabsTrigger value="stats">Website Statistics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="subscribers" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="font-montserrat text-navy">Email Subscribers</CardTitle>
                  <CardDescription>
                    {subscribers?.length ? `${subscribers.length} subscribers total` : "Loading subscribers..."}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                    <Input 
                      placeholder="Search by email"
                      className="pl-9" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button 
                    onClick={exportSubscribers}
                    disabled={isLoading || !subscribers?.length}
                    className="bg-teal hover:bg-teal-light text-navy"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export CSV
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex justify-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-teal" />
                  </div>
                ) : error ? (
                  <Alert variant="destructive">
                    <AlertDescription>
                      Error loading subscribers. Please try again.
                    </AlertDescription>
                  </Alert>
                ) : subscribers?.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    No subscribers found. Promote your newsletter to begin building your email list.
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Email</TableHead>
                        <TableHead>Date Subscribed</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredSubscribers.map((subscriber: any) => (
                        <TableRow key={subscriber.id}>
                          <TableCell className="font-medium">{subscriber.email}</TableCell>
                          <TableCell>{formatDate(new Date(subscriber.createdAt))}</TableCell>
                          <TableCell className="text-right">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => deleteSubscriber.mutate(subscriber.id)}
                              disabled={deleteSubscriber.isPending}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat text-navy">Subscriber Statistics</CardTitle>
                <CardDescription>New subscriber growth and engagement</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-6 justify-between">
                <div className="bg-gray-50 p-6 rounded-lg flex-1">
                  <div className="text-sm text-gray-500 mb-2">Total Subscribers</div>
                  <div className="text-3xl font-bold text-navy">{subscribers?.length || 0}</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg flex-1">
                  <div className="text-sm text-gray-500 mb-2">New This Month</div>
                  <div className="text-3xl font-bold text-navy">
                    {subscribers?.filter((sub: any) => {
                      const date = new Date(sub.createdAt);
                      const now = new Date();
                      return date.getMonth() === now.getMonth() && 
                             date.getFullYear() === now.getFullYear();
                    }).length || 0}
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg flex-1">
                  <div className="text-sm text-gray-500 mb-2">Open Rate</div>
                  <div className="text-3xl font-bold text-navy">N/A</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat text-navy">Contact Form Messages</CardTitle>
                <CardDescription>
                  Messages submitted through the contact form
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  Contact messages management coming soon
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="stats">
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat text-navy">Website Statistics</CardTitle>
                <CardDescription>
                  Traffic and engagement metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  Website statistics dashboard coming soon
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
