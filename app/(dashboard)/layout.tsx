import React from "react";
import Sidebar from "./_components/sidebar";
import OrgSidebar from "./_components/org-sidebar";
import Navbar from "./_components/navbar";

interface DahsboardLayoutProps {
  children: React.ReactNode;
}

const DahsboardLayout = ({ children }: DahsboardLayoutProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full ">
          <OrgSidebar />
          <div className="h-full flex-1">
            {/* ADD NAVBAR */}
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DahsboardLayout;
