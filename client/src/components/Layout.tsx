import { ReactNode, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AdminLoginModal } from "@/components/AdminLoginModal";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer onAdminAccess={() => setIsAdminModalOpen(true)} />
      <AdminLoginModal 
        isOpen={isAdminModalOpen} 
        onClose={() => setIsAdminModalOpen(false)} 
      />
    </div>
  );
};

export default Layout;
