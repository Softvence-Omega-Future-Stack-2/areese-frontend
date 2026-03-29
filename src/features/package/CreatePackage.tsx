import CommonButton from "@/components/shared/CommonButton";
import SectionHeader from "@/components/shared/SectionHeader";
import { useState } from "react";
import { inputClass } from "../task/CreateDashboardForm";

interface PackageItem {
  onCancel: () => void;
}

const CreatePackage: React.FC<PackageItem> = ({ onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    duration: "",
    durationNote: "",
    description: "",
    serviceFee: "", // optional
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Example payload (serviceFee optional)
    const payload = {
      ...formData,
      serviceFee: formData.serviceFee || null,
      durationNote: formData.durationNote || null,
    };

    console.log(payload);
  };

  return (
    <div>
      <form className={inputClass.form} onSubmit={handleSubmit}>
        <SectionHeader title="Create New Package" />

        {/* Name */}
        <div>
          <label className={inputClass.label}>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter name"
            className={inputClass.input}
            onChange={handleChange}
          />
        </div>

        {/* Duration */}
        <div>
          <label className={inputClass.label}>Duration (min)</label>
          <input
            name="duration"
            type="number"
            placeholder="Enter duration (e.g., 60)"
            className={inputClass.input}
            onChange={handleChange}
          />
        </div>

        {/* Duration Note (NEW) */}
        <div>
          <label className={inputClass.label}>Duration Note (Optional)</label>
          <input
            name="durationNote"
            type="text"
            placeholder="e.g., Depends on service type"
            className={inputClass.input}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className={inputClass.label}>Service Fee (Optional)</label>
          <input
            name="serviceFee"
            type="number"
            placeholder="Enter additional fee (optional)"
            className={inputClass.input}
            onChange={handleChange}
          />
        </div>

        {/* Description */}
        <div>
          <label className={inputClass.label}>Description</label>
          <textarea
            name="description"
            placeholder="Enter description"
            rows={3}
            className={inputClass.input}
            onChange={handleChange}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end items-center gap-2">
          <CommonButton onClick={onCancel} variant="secondary" type="button">
            Cancel
          </CommonButton>

          <CommonButton type="submit">Create Package</CommonButton>
        </div>
      </form>
    </div>
  );
};

export default CreatePackage;
