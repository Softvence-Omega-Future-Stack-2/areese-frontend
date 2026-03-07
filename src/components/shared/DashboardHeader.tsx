import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import logo from "@/assets/images/pngLogo.jpg";
import profile from "@/assets/images/profile.png";

import { Link } from "react-router-dom";
import CommonWrapper from "./CommonWrapper";
import DashboardSearch from "./DashboardSearch";

interface DashboardHeaderProps {
  sidebarOpen: boolean;
}

const DashboardHeader = ({ sidebarOpen }: DashboardHeaderProps) => {
  const headerContent = (
    <header className="sticky top-0 z-50 w-full h-20 bg-white px-4.5">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center gap-7.5">
          <Link to={"/dashboard"}>
            <img
              className="w-20 mix-blend-multiply"
              src={logo || "/logo.svg"}
              alt="logo"
            />
          </Link>
          <div className="hidden md:block">
            <DashboardSearch />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <div className="h-10 w-10  border border-border p-1 rounded-full">
                <img src={profile} alt="" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white border border-border"
            >
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );

  return !sidebarOpen ? (
    headerContent
  ) : (
    <CommonWrapper className="!w-full">{headerContent}</CommonWrapper>
  );
};

export default DashboardHeader;
