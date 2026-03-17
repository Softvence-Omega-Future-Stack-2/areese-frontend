import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../shared/AdminSidebar";
import DashboardHeader from "../shared/DashboardHeader";
import SubscribeModal from "../shared/SubscribeModal";

const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="w-full h-screen bg-bg pt-2 overflow-hidden">
      <div className="w-full flex items-center justify-between bg-white">
        <DashboardHeader sidebarOpen={sidebarOpen} />
        <div className="lg:hidden pr-4">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger className="cursor-pointer" asChild>
              <button className="p-2 rounded-md border border-border">
                <Menu className="h-6 w-6 cursor-pointer" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-70">
              <AdminSidebar
                sidebarOpen={true}
                onLinkClick={() => setSidebarOpen(false)}
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className=" flex items-start px-4.5 pt-2 md:pt-6  gap-6  h-[calc(100vh-80px)]  ">
        <div className="hidden lg:block h-full ">
          <AdminSidebar sidebarOpen={true} />
        </div>

        <div className="flex-1 w-full h-full pb-6 overflow-y-auto ">
          <Outlet />
        </div>
      </div>
      <SubscribeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default MainLayout;
