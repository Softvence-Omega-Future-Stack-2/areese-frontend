import CommonButton from "@/components/shared/CommonButton";
import SectionHeader from "@/components/shared/SectionHeader";
import React, { useState, type FC } from "react";
import { inputClass } from "../task/CreateTaskForm";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

interface TimeSchedule {
  startTime: string;
  endTime: string;
}

interface ProfileFormState {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  roleTitle: string;
  timezone: string;
  videoPlatform: string;
  schedules: Record<string, TimeSchedule>;
  newPassword: string;
  confirmPassword: string;
}

const ProfileSettingsForm: FC = () => {
  const initialSchedules = daysOfWeek.reduce(
    (acc, day) => ({ ...acc, [day]: { startTime: "", endTime: "" } }),
    {} as Record<string, TimeSchedule>,
  );

  const [form, setForm] = useState<ProfileFormState>({
    fullName: "Admin User",
    email: "admin@email.com",
    phone: "",
    businessName: "",
    roleTitle: "",
    timezone: "UTC",
    videoPlatform: "Zoom",
    schedules: initialSchedules,
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (field: keyof ProfileFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile data:", form);
  };

  return (
    <form onSubmit={handleSubmit} className={inputClass.form}>
      <SectionHeader
        title="Personal Information"
        description="Leave blank if you do not want to change the details.
"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={inputClass.label}>First Name</label>
          <input
            type="text"
            value={form.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            placeholder="Enter full name"
            className={inputClass.input}
          />
        </div>
        <div>
          <label className={inputClass.label}>Last Name</label>
          <input
            type="text"
            value={form.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            placeholder="Enter full name"
            className={inputClass.input}
          />
        </div>
        <div>
          <label className={inputClass.label}>Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Enter email"
            className={inputClass.input}
          />
        </div>
      </div>

      <SectionHeader
        title="Account Information"
        description="Leave blank if you do not want to change the details.
        "
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={inputClass.label}>Account Type (Subscriber)</label>
          <input
            type="text"
            value={form.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            placeholder="Enter full name"
            className={inputClass.input}
          />
        </div>
        <div>
          <label className={inputClass.label}>Member Since</label>
          <input
            type="text"
            value={form.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            placeholder="Enter full name"
            className={inputClass.input}
          />
        </div>
      </div>

      <SectionHeader
        title="Change Password"
        description="Leave blank if you do not want to change the password."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={inputClass.label}>Current Password</label>
          <input
            type="password"
            value={form.newPassword}
            onChange={(e) => handleChange("newPassword", e.target.value)}
            placeholder="Enter new password"
            className={inputClass.input}
          />
        </div>
        <div>
          <label className={inputClass.label}>New Password</label>
          <input
            type="password"
            value={form.newPassword}
            onChange={(e) => handleChange("newPassword", e.target.value)}
            placeholder="Enter new password"
            className={inputClass.input}
          />
        </div>

        <div>
          <label className={inputClass.label}>Confirm Password</label>
          <input
            type="password"
            value={form.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            placeholder="Enter confirm password"
            className={inputClass.input}
          />
        </div>
      </div>
      <div className="flex items-center gap-4 pt-2">
        <CommonButton type="submit" variant="primary">
          Save Changes
        </CommonButton>
      </div>
    </form>
  );
};

export default ProfileSettingsForm;
