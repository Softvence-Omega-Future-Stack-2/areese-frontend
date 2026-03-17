import CommonButton from "@/components/shared/CommonButton";
import SectionHeader from "@/components/shared/SectionHeader";
import type { FC } from "react";
import { inputClass } from "../task/CreateTaskForm";

interface CreatePlanProps {
  onCancel: () => void;
}
const CreatePlan: FC<CreatePlanProps> = ({ onCancel }) => {
  return (
    <div>
      <form className={inputClass.form}>
        <SectionHeader title="Create a plan" description="Add a new plan" />
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
              <label className={inputClass.label}>Price</label>
              <input
                type="number"
                placeholder="Enter price"
                className={inputClass.input}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div>
              <label className={inputClass.label}>Slug</label>
              <input
                type="text"
                placeholder="Enter slug"
                className={inputClass.input}
              />
            </div>
            <div>
              <label className={inputClass.label}>Stripe Plan</label>
              <input
                type="text"
                placeholder="Enter Stripe Plan"
                className={inputClass.input}
              />
            </div>
          </div>

          <CommonButton>Generate Slug</CommonButton>

          <div className="mb-8">
            <label className={inputClass.label}>Description</label>
            <textarea
              placeholder="Enter description"
              rows={5}
              className={inputClass.input}
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <CommonButton>Create plan</CommonButton>
          <CommonButton onClick={() => onCancel} variant="secondary">
            Cancel
          </CommonButton>
        </div>
      </form>
    </div>
  );
};

export default CreatePlan;
