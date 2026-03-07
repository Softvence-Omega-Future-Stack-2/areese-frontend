"use client";

import ButtonWithIcon from "@/components/shared/ButtonWithIcon";
import CommonButton from "@/components/shared/CommonButton";
import CommonSelect from "@/components/shared/CommonSelect";
import DashboardTopSection from "@/components/shared/DashboardTopSection";
import FormHeader from "@/components/shared/SectionHeader";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const inputClass = {
  form: "space-y-6 w-full border border-border rounded-md p-4 sm:p-6 bg-white",
  label: "block text-sm  text-black mb-2",
  input:
    "w-full border border-border bg-white rounded-md p-3 outline-none text-black text-xs",
  error: "text-red-500 text-sm mt-1",
};

const CreateTaskForm = () => {
  const navigate = useNavigate();
  const [taskType, setTaskType] = useState<string>("Regular");
  const [repeat, setRepeat] = useState<string>("Daily");
  const [reminder, setReminder] = useState<string>("5min");
  const [videoPlatform, setVideoPlatform] = useState<string>("Google Meet");
  return (
    <div className="w-full">
      <DashboardTopSection
        title="Create A Task"
        description="Add a new task to your task list"
      />

      <form className={inputClass.form}>
        <div>
          <FormHeader
            title="Create A Task"
            description="Add a new task to your task list"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={inputClass.label}>Task Title</label>
            <input
              className={inputClass.input}
              type="text"
              placeholder="Enter task title"
            />
          </div>
          <div>
            <label className={inputClass.label}>Invitees (max 10)</label>
            <input
              className={inputClass.input}
              type="text"
              placeholder="Enter invitees"
            />
          </div>

          <div>
            <label className={inputClass.label}> Task Type</label>
            <CommonSelect
              item={[
                { value: "Regular", label: "Regular" },
                { value: "Video", label: "Video" },
                { value: "Phone", label: "Phone" },
                { value: "Note", label: "Note" },
              ]}
              value={taskType}
              onValueChange={setTaskType}
              placeholder="Select an option"
              className="w-full"
            />
          </div>
          <div>
            <label className={inputClass.label}> Due Date</label>
            <input
              className={inputClass.input}
              type="date"
              placeholder="Enter date"
            />
          </div>
          <div className="flex gap-2 items-baseline-last">
            <div className="flex-1">
              <label className={inputClass.label}>
                Add Keypoints To This Task
              </label>
              <input
                className={inputClass.input}
                type="text"
                placeholder="Enter keypoints"
              />
            </div>
            <ButtonWithIcon icon={FaPlus} className="rounded-md!">
              Add KeyPoints
            </ButtonWithIcon>
          </div>

          <div>
            <label className={inputClass.label}> Repeat</label>
            <CommonSelect
              item={[
                { value: "Daily", label: "Daily" },
                { value: "Weekly", label: "Weekly" },
                { value: "Monthly", label: "Monthly" },
                { value: "Yearly", label: "Yearly" },
              ]}
              onValueChange={setRepeat}
              value={repeat}
              placeholder="Select an option"
              className="w-full"
            />
          </div>
          <div>
            <label className={inputClass.label}>Resources Link</label>
            <input
              className={inputClass.input}
              type="text"
              placeholder="Enter resources link"
            />
          </div>
          <div>
            <label className={inputClass.label}>Tags</label>
            <input
              className={inputClass.input}
              type="text"
              placeholder="Enter tags"
            />
          </div>
          <div>
            <label className={inputClass.label}>Reminder</label>
            <CommonSelect
              item={[
                { value: "5min", label: "5 Minutes" },
                { value: "15min", label: "15 Minutes" },
                { value: "30min", label: "30 Minutes" },
                { value: "1hour", label: "1 Hour" },
                { value: "2hour", label: "2 Hours" },
                { value: "1day", label: "1 Day" },
              ]}
              value={reminder}
              onValueChange={setReminder}
              placeholder="Select an option"
              className="w-full"
            />
          </div>

          <div>
            <label className={inputClass.label}>Video Platform</label>
            <CommonSelect
              item={[
                { value: "Google Meet", label: "Google Meet" },
                { value: "Zoom", label: "Zoom" },
              ]}
              onValueChange={setVideoPlatform}
              value={videoPlatform}
              className="w-full"
              placeholder="Select an option"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <CommonButton variant="primary">Create Task</CommonButton>
          <CommonButton
            onClick={() => navigate("/dashboard")}
            variant="secondary"
          >
            Cancel
          </CommonButton>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskForm;
