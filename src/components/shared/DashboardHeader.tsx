import logo from "@/assets/images/pngLogo.jpg";
import { Link } from "react-router-dom";
import CommonWrapper from "./CommonWrapper";
import DashboardSearch from "./DashboardSearch";

interface DashboardHeaderProps {
  sidebarOpen: boolean;
}

const DashboardHeader = ({ sidebarOpen }: DashboardHeaderProps) => {
  const headerContent = (
    <header className="sticky top-0 z-50 w-full h-20 bg-white px-4.5 ">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <Link to="/admin/dashboard" className="flex items-center h-20 w-10">
              <img
                className="  object-cover w-full h-full "
                src={logo || "/logo.svg"}
                alt="logo"
              />
            </Link>

            <p className="text-xl font-bold whitespace-nowrap">Dont forget</p>
          </div>

          <div className="hidden md:block">
            <DashboardSearch />
          </div>
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
