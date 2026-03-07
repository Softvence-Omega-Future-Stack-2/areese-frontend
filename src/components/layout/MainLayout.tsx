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
    <div className="w-full min-h-screen bg-[#F8FAFC] pt-2">
      <div className="w-full flex items-center justify-between bg-white">
        <DashboardHeader sidebarOpen={sidebarOpen} />
        <div className="lg:hidden pr-4">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger className="cursor-pointer" asChild>
              <button className="p-2 rounded-md border border-slate-200">
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

      <div className=" flex items-start px-4.5 pt-6 gap-6">
        <div className="hidden lg:block">
          <AdminSidebar sidebarOpen={true} />
        </div>

        <div className="flex-1 w-full">
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
