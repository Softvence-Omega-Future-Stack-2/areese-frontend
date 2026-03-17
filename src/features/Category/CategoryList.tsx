import CardAction from "@/components/shared/CardAction";
import DashboardSearch from "@/components/shared/DashboardSearch";
import Pagination from "@/components/shared/Pagination";
import SectionHeader from "@/components/shared/SectionHeader";
export const tableDesign = {
  table:
    "w-full border-separate border-spacing-0 border border-[#EEF2FF] rounded-lg overflow-hidden",
  thead: "bg-[#EEF2FF] text-black",
  tbody: "text-[#101828]",
  tr: "border-b last:border-b-0 border-[#EEF2FF] ",
  th: " text-center! py-3 px-4 text-sm font-bold text-black border-b border-r border-[#EEF2FF] first:rounded-tl-lg last:rounded-tr-lg",
  td: "text-center! py-3 px-4 text-sm text-[#101828] border-b border-r border-[#EEF2FF] last:border-r-0",
};
const tableHeaders = [
  { label: "#", align: "text-center hidden xl:table-cell" },
  { label: "Name", align: "text-left " },
  { label: "Status", align: "text-left  hidden sm:table-cell" },

  { label: "Edit", align: "text-left  " },
  { label: "Delete", align: "text-left " },
];

const category = [
  { name: "John Doe", status: "active" },
  { name: "Jane Smith", status: "inactive" },
  { name: "Michael Brown", status: "active" },
  { name: "Emily Davis", status: "inactive" },
  { name: "Chris Wilson", status: "active" },
  { name: "Sophia Taylor", status: "active" },
  { name: "Daniel Martinez", status: "inactive" },
  { name: "Olivia Anderson", status: "active" },
  { name: "William Thomas", status: "inactive" },
  { name: "Ava Jackson", status: "active" },
];
export const CategoryList = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <SectionHeader
          title="Category List"
          description="Here the all user list will be shown"
        />
        <DashboardSearch />
      </div>

      <div className=" bg-white rounded-xl border border-gray-200 overflow-hidden mt-6 ">
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
              {category.length === 0 ? (
                <tr className={tableDesign.tr}>
                  <td colSpan={7} className={`text-center ${tableDesign.td}`}>
                    No category data
                  </td>
                </tr>
              ) : (
                category.map((assessment, index) => (
                  <tr key={assessment.name} className={tableDesign.tr}>
                    <td className={` hidden xl:table-cell ${tableDesign.td} `}>
                      <span
                        className={`px-3 py-1 w-fit mx-auto rounded-full text-xs font-medium hidden md:block `}
                      >
                        {index + 1}
                      </span>
                    </td>

                    <td className={` ${tableDesign.td} `}>{assessment.name}</td>

                    <td className={` ${tableDesign.td}  hidden sm:table-cell`}>
                      {assessment.status}
                    </td>

                    <td className={` ${tableDesign.td}  `}>
                      <div className="flex justify-center">
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
    </>
  );
};
export default CategoryList;
