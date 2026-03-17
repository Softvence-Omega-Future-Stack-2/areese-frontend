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
  { label: "Price", align: "text-left hidden lg:table-cell" },
  { label: "Slug", align: "text-left" },
  { label: "Stripe plan", align: "text-left hidden lg:table-cell" },
  { label: "Edit", align: "text-left " },
  { label: "Delete", align: "text-left " },
];

export const planData = [
  {
    id: 1,
    name: "Core Plan",
    price: 30,
    slug: "core-plan",
    stripePlan: "price_1T3wOyEm8LraEkF0anUDgwLW",
    description: "Essential features for individuals getting started.",
  },
  {
    id: 2,
    name: "Starter Plan",
    price: 10,
    slug: "starter-plan",
    stripePlan: "price_starter_001",
    description: "Basic tools and features for new users.",
  },
  {
    id: 3,
    name: "Basic Plan",
    price: 20,
    slug: "basic-plan",
    stripePlan: "price_basic_002",
    description: "Core functionality for small teams and individuals.",
  },
  {
    id: 4,
    name: "Standard Plan",
    price: 40,
    slug: "standard-plan",
    stripePlan: "price_standard_003",
    description: "Balanced plan with advanced features and flexibility.",
  },
  {
    id: 5,
    name: "Pro Plan",
    price: 60,
    slug: "pro-plan",
    stripePlan: "price_pro_004",
    description: "Professional tools for growing businesses.",
  },
  {
    id: 6,
    name: "Business Plan",
    price: 90,
    slug: "business-plan",
    stripePlan: "price_business_005",
    description: "Advanced capabilities for scaling teams.",
  },
  {
    id: 7,
    name: "Team Plan",
    price: 120,
    slug: "team-plan",
    stripePlan: "price_team_006",
    description: "Collaboration features designed for teams.",
  },
  {
    id: 8,
    name: "Growth Plan",
    price: 150,
    slug: "growth-plan",
    stripePlan: "price_growth_007",
    description: "Powerful tools to support rapid growth.",
  },
  {
    id: 9,
    name: "Premium Plan",
    price: 200,
    slug: "premium-plan",
    stripePlan: "price_premium_008",
    description: "Full feature access with priority support.",
  },
  {
    id: 10,
    name: "Enterprise Plan",
    price: 300,
    slug: "enterprise-plan",
    stripePlan: "price_enterprise_009",
    description: "Custom solutions and dedicated enterprise support.",
  },
];
export const PlanList = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <SectionHeader
          title="Plan List"
          description="Create paid session packages that connect directly to your public booking page."
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
              {planData.length === 0 ? (
                <tr className={tableDesign.tr}>
                  <td colSpan={7} className={`text-center ${tableDesign.td}`}>
                    No data
                  </td>
                </tr>
              ) : (
                planData.map((assessment, index) => (
                  <tr key={assessment.id} className={tableDesign.tr}>
                    <td className={` hidden xl:table-cell ${tableDesign.td} `}>
                      <span
                        className={`px-3 py-1 w-fit mx-auto rounded-full text-xs font-medium hidden md:block `}
                      >
                        {index + 1}
                      </span>
                    </td>

                    <td className={` ${tableDesign.td}  `}>
                      {assessment.name}
                    </td>

                    <td className={` ${tableDesign.td}  `}>
                      ${assessment.price}
                    </td>
                    <td className={` ${tableDesign.td} hidden lg:table-cell  `}>
                      {assessment.slug}
                    </td>
                    <td className={` ${tableDesign.td} hidden lg:table-cell  `}>
                      {assessment.stripePlan}
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
    </>
  );
};
export default PlanList;
