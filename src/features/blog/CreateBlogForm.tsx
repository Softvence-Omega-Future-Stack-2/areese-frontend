import CommonButton from "@/components/shared/CommonButton";
import CommonSelect from "@/components/shared/CommonSelect";
import SectionHeader from "@/components/shared/SectionHeader";
import type { FC } from "react";
import { inputClass } from "../task/CreateTaskForm";
import { blogs } from "./BlogList";
import CKStyleEditor from "./CKStyleEditor";

interface CreateBlogProps {
  onCancel: () => void;
}
const categoryOptions = blogs.map((blog) => ({
  label: blog.category,
  value: blog.category,
}));
const CreateBlogForm: FC<CreateBlogProps> = ({ onCancel }) => {
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
              <label className={inputClass.label}>Category</label>
              <CommonSelect
                item={categoryOptions}
                value={categoryOptions[0].value}
                placeholder="Select Category"
                onValueChange={() => {}}
                className="w-full"
              />
            </div>
            <div>
              <label className={inputClass.label}>Title</label>
              <input
                type="text"
                placeholder="Enter title"
                className={inputClass.input}
              />
            </div>

            <div className="flex gap-2 items-end">
              <div className="flex-1">
                <label className={inputClass.label}>Slug</label>
                <input
                  type="text"
                  placeholder="Enter slug"
                  className={inputClass.input}
                />
              </div>
              <CommonButton className="">Generate slug</CommonButton>
            </div>
            <div>
              <label className={inputClass.label}>Short Description</label>
              <input
                type="text"
                placeholder="Enter short description"
                className={inputClass.input}
              />
            </div>
            <div>
              <label className={inputClass.label}>Images</label>
              <input
                type="file"
                placeholder="Enter short description"
                className={inputClass.input}
              />
            </div>
            <div>
              <label className={inputClass.label}>Status</label>
              <CommonSelect
                item={[
                  { label: "Active", value: "active" },
                  { label: "Inactive", value: "inactive" },
                ]}
                value="active"
                placeholder="Select Status"
                onValueChange={() => {}}
                className="w-full"
              />
            </div>
          </div>
          <CKStyleEditor />
        </div>
        <div className="flex items-center gap-4">
          <CommonButton>Create blog</CommonButton>
          <CommonButton onClick={() => onCancel} variant="secondary">
            Cancel
          </CommonButton>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogForm;
