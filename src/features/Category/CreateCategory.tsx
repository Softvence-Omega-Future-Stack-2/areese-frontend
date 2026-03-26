import CommonButton from "@/components/shared/CommonButton";
import SectionHeader from "@/components/shared/SectionHeader";
import type { FC } from "react";
import { inputClass } from "../task/CreateDashboardForm";

interface CreatePlanProps {
  onCancel: () => void;
}
const CreateCategory: FC<CreatePlanProps> = ({ onCancel }) => {
  return (
    <div>
      <form className={inputClass.form}>
        <SectionHeader
          title="Create a category"
          description="Add a new category"
        />
        <div className=" space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div>
              <label className={inputClass.label}>Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className={inputClass.input}
              />
            </div>
            <div>
              <label className={inputClass.label}>Status </label>
              <input
                type="text"
                placeholder=" Enter status"
                className={inputClass.input}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <CommonButton>Create Category</CommonButton>
          <CommonButton onClick={onCancel} variant="secondary">
            Cancel
          </CommonButton>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
