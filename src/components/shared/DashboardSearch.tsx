import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

const DashboardSearch = ({}) => {
  return (
    <div className="relative w-full max-w-sm">
      <div
        className={cn(
          "flex items-center w-full gap-1 border border-border rounded-md bg-white px-3 transition-shadow duration-200 outline-none",
        )}
      >
        <span className="flex items-center justify-center text-[#94A3B8] rounded-full transition-colors duration-200">
          <Search className="h-4 w-4" />
        </span>
        <input
          type="text"
          placeholder="Search menu..."
          className="w-full outline-none bg-transparent text-[#1e293b] py-2 placeholder:text-[#94A3B8]"
        />
      </div>
    </div>
  );
};

export default DashboardSearch;
