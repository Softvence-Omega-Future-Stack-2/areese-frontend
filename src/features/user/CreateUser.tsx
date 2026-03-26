import CommonButton from "@/components/shared/CommonButton";
import CommonSelect from "@/components/shared/CommonSelect";
import SectionHeader from "@/components/shared/SectionHeader";
import type { FC } from "react";
import { inputClass } from "../task/CreateDashboardForm";

interface CreatePlanProps {
  onCancel: () => void;
}
const CreateUser: FC<CreatePlanProps> = ({ onCancel }) => {
  return (
    <div>
      <form className={inputClass.form}>
        <SectionHeader title="Create a user" description="Add a new user" />
        <div className=" space-y-4">
          <div className="grid grid-cols-1  sm:grid-cols-2 gap-4 ">
            <div>
              <label className={inputClass.label}>Full Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className={inputClass.input}
              />
            </div>
            <div>
              <label className={inputClass.label}>Email </label>
              <input
                type="number"
                placeholder="Enter price"
                className={inputClass.input}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div>
              <label className={inputClass.label}>Password</label>
              <input
                type="password"
                placeholder="Enter password..."
                className={inputClass.input}
              />
            </div>
            <div>
              <label className={inputClass.label}>Confirm Password *</label>
              <input
                type="password"
                placeholder="Enter confirm password..."
                className={inputClass.input}
              />
            </div>
          </div>

          <div className="mb-8">
            <label className={inputClass.label}>Role</label>

            <CommonSelect
              value="admin"
              item={[
                {
                  label: "Super Admin",
                  value: "super-admin",
                },
                {
                  label: "Admin",
                  value: "admin",
                },
                {
                  label: "Manager",
                  value: "manager",
                },
                {
                  label: "Assistant",
                  value: "assistant",
                },
              ]}
              onValueChange={() => {}}
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <CommonButton>Create plan</CommonButton>
          <CommonButton onClick={onCancel} variant="secondary">
            Cancel
          </CommonButton>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
