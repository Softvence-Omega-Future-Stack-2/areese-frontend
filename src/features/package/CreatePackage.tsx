import CommonButton from "@/components/shared/CommonButton";
import SectionHeader from "@/components/shared/SectionHeader";
import { inputClass } from "../task/CreateTaskForm";

interface PackageForm {
  name: string;
  price: string;
  duration: string;
  description: string;
}

interface PackageItem {
  cancel: () => void;
}
const CreatePackage: React.FC<PackageItem> = ({ cancel }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="">
      <form className={inputClass.form}>
        <SectionHeader title="Create New Package" />

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

        <div>
          <label className={inputClass.label}>Duration (min)</label>
          <input
            type="number"
            placeholder="Enter duration in minutes (e.g., 60)"
            className={inputClass.input}
          />
        </div>

        <div>
          <label className={inputClass.label}>Description</label>
          <textarea
            placeholder="Enter description"
            rows={3}
            className={inputClass.input}
          />
        </div>

        <div className="flex justify-end items-center gap-2">
          <CommonButton onClick={() => cancel} variant="secondary">
            Cancel
          </CommonButton>
          <CommonButton onClick={handleSubmit}>Create Package</CommonButton>
        </div>
      </form>
    </div>
  );
};

export default CreatePackage;
