import CardAction from "@/components/shared/CardAction";
import DashboardSearch from "@/components/shared/DashboardSearch";
import Pagination from "@/components/shared/Pagination";
import SectionHeader from "@/components/shared/SectionHeader";
import { useState } from "react";
import PackageModal from "./PackageModal";
export const tableDesign = {
  table:
    "w-full border-separate border-spacing-0 border border-border rounded-lg overflow-hidden",
  thead: "bg-[#EEF2FF] text-black",
  tbody: "text-[#101828]",
  tr: "border-b last:border-b-0 border-border ",
  th: " text-center! py-3 px-4 text-sm font-bold text-black border-b border-r border-border first:rounded-tl-lg last:rounded-tr-lg",
  td: "text-center! py-3 px-4 text-sm text-[#101828] border-b border-r border-border last:border-r-0",
};
const tableHeaders = [
  { label: "#", align: "text-center hidden md:table-cell" },
  { label: "Name", align: "text-left  " },
  { label: "Price", align: "text-left hidden  sm:table-cell" },
  { label: "Duration (min)", align: "text-left hidden md:table-cell" },
  { label: "Edit", align: "text-left " },
  { label: "Delete", align: "text-left " },
];
export interface PackageItem {
  id: number;
  name: string;
  price: number;
  duration: number;
}

export const packageData: PackageItem[] = [
  {
    id: 1,
    name: "Starter Session",
    price: 100,
    duration: 15,
  },
  {
    id: 2,
    name: "Basic Consultation",
    price: 200,
    duration: 30,
  },
  {
    id: 3,
    name: "Professional Session",
    price: 300,
    duration: 45,
  },
  {
    id: 4,
    name: "Premium Coaching",
    price: 400,
    duration: 60,
  },
  {
    id: 5,
    name: "VIP Strategy Call",
    price: 500,
    duration: 90,
  },
];
export const PackageList = () => {
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <SectionHeader
          title="Package List"
          description="Here the all package list will be shown"
        />
        <DashboardSearch />
      </div>

      <div className=" bg-white rounded-xl border border-border overflow-hidden  mt-6 ">
        <div className="block w-full overflow-x-auto">
          <table className={tableDesign.table}>
            <thead className={tableDesign.thead}>
              <tr className={tableDesign.tr}>
                {tableHeaders.map((header, index) => (
                  <th
                    key={index}
                    className={` ${header.align} ${tableDesign.th} `}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className={tableDesign.tbody}>
              {packageData.length === 0 ? (
                <tr className={tableDesign.tr}>
                  <td colSpan={7} className={`text-center ${tableDesign.td}`}>
                    No data
                  </td>
                </tr>
              ) : (
                packageData.map((assessment, index) => (
                  <tr key={assessment.id} className={tableDesign.tr}>
                    <td className={` hidden md:table-cell ${tableDesign.td} `}>
                      <span
                        className={`px-3 py-1 w-fit mx-auto rounded-full text-xs font-medium hidden md:block `}
                      >
                        {index + 1}
                      </span>
                    </td>

                    <td
                      onClick={() => setIsPackageModalOpen(true)}
                      className={` ${tableDesign.td}  cursor-pointer `}
                    >
                      {assessment.name}
                    </td>

                    <td className={` ${tableDesign.td}  hidden  sm:table-cell`}>
                      ${assessment.price}
                    </td>
                    <td className={` ${tableDesign.td} hidden md:table-cell  `}>
                      {assessment.duration}
                    </td>
                    <td className={` ${tableDesign.td}`}>
                      <div className="flex justify-center">
                        {" "}
                        <CardAction onEdit={() => {}} />
                      </div>
                    </td>
                    <td className={` ${tableDesign.td}  `}>
                      <div className="flex justify-center">
                        <CardAction onDelete={() => {}} />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="my-6">
        <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
      </div>
      {isPackageModalOpen && (
        <PackageModal
          data={{
            id: 1,
            name: "Starter Session",
            price: 100,
            duration: 15,
          }}
          onClose={() => setIsPackageModalOpen(false)}
        />
      )}
    </>
  );
};
export default PackageList;
