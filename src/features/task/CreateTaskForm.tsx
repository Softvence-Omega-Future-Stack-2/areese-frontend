import ButtonWithIcon from "@/components/shared/ButtonWithIcon";
import CommonButton from "@/components/shared/CommonButton";
import CommonSelect from "@/components/shared/CommonSelect";
import CustomCheckbox from "@/components/shared/CustomCheckbox";
import DashboardTopSection from "@/components/shared/DashboardTopSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { FaRegCalendarAlt } from "react-icons/fa";
import { z } from "zod";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const inputClass = {
  form: "space-y-6 w-full border border-border rounded-md p-4 sm:p-6 bg-white ",
  label: "block text-sm text-text mb-2 font-semibold",
  input:
    "w-full border border-border bg-white rounded-md p-3.5 outline-none text-text text-xs",
  error: "text-red-500 text-sm mt-1",
};

const formSchema = z.object({
  title: z.string().min(1, "Task title is required"),
  invitees: z.string().optional(),
  taskType: z.string(),
  videoPlatform: z.string().optional(),
  endDate: z.string().min(1, "End date is required"),
  resources: z.string().optional(),
  tags: z.string().optional(),
  repeat: z.string(),
  reminder: z.string(),
  keypoints: z
    .array(
      z.object({
        value: z.string().min(1, "Keypoint cannot be empty"),
      }),
    )
    .min(1, "At least one keypoint required"),
});

type FormValues = z.infer<typeof formSchema>;

const CreateTaskForm = () => {
  const navigate = useNavigate();

  const [taskType, setTaskType] = useState("Regular");
  const [repeat, setRepeat] = useState("Daily");
  const [reminder, setReminder] = useState("5min");
  const [videoPlatform, setVideoPlatform] = useState("Google Meet");

  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keypoints: [{ value: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "keypoints",
  });

  const toggleDay = (day: string, checked: boolean) => {
    if (checked) {
      setSelectedDays((prev) => [...prev, day]);
    } else {
      setSelectedDays((prev) => prev.filter((d) => d !== day));
    }
  };

  const toggleMonth = (month: string, checked: boolean) => {
    if (checked) {
      setSelectedMonths((prev) => [...prev, month]);
    } else {
      setSelectedMonths((prev) => prev.filter((m) => m !== month));
    }
  };

  const onSubmit = (data: FormValues) => {
    const payload = {
      ...data,
      selectedMonths,
      selectedDays,
      taskType,
      repeat,
      reminder,
      videoPlatform,
    };

    console.log("FORM DATA", payload);
  };

  return (
    <div className="w-full">
      <DashboardTopSection
        title="Create A Task"
        description="Add a new task to your task list"
      />

      <form onSubmit={handleSubmit(onSubmit)} className={inputClass.form}>
        <div>
          <SectionHeader
            title="Create a task"
            description="Add a new task to your task list"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Title */}
          <div>
            <label className={inputClass.label}>Task Title</label>
            <input
              {...register("title")}
              className={inputClass.input}
              type="text"
              placeholder="Enter task title"
            />
            {errors.title && (
              <p className={inputClass.error}>{errors.title.message}</p>
            )}
          </div>
          {/* Invitees */}
          <div>
            <label className={inputClass.label}>Invitees (max 10)</label>
            <input
              {...register("invitees")}
              className={inputClass.input}
              type="text"
              placeholder="Enter invitees"
            />
          </div>
          {/* Task Type */}
          <div>
            <label className={inputClass.label}>Task Type</label>
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
          {/* Video Platform */}
          {taskType === "Video" && (
            <>
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
              </div>{" "}
              <div>
                <label className={inputClass.label}>Video link</label>
                <input
                  {...register("invitees")}
                  className={inputClass.input}
                  type="text"
                  placeholder="Enter video link"
                />
              </div>
            </>
          )}
          {/* time & Date */}

          <div>
            <label className={inputClass.label}>Time & Date</label>
            <div className="relative">
              <input
                {...register("endDate")}
                className={`${inputClass.input} pr-10 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-10 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer`}
                type="datetime-local"
              />
              <FaRegCalendarAlt
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text pointer-events-none"
                size={16}
              />
            </div>
            {errors.endDate && (
              <p className={inputClass.error}>{errors.endDate.message}</p>
            )}
          </div>
          {/* KeyPoints */}
          <div className="flex flex-col gap-2">
            <label className={inputClass.label}>
              Add Keypoints To This Task
            </label>

            {fields.map((field, index) => (
              <div
                key={field.id}
                className="flex flex-col md:flex-row items-start gap-2"
              >
                <input
                  {...register(`keypoints.${index}.value`)}
                  className={inputClass.input}
                  placeholder="Enter keypoints"
                />

                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="border border-border cursor-pointer hover:bg-late-accent hover:text-white px-3 rounded-md h-[42px]"
                  >
                    <FiTrash2 />
                  </button>
                )}

                {index === fields.length - 1 && (
                  <ButtonWithIcon
                    type="button"
                    icon={FaPlus}
                    className="rounded-md!"
                    onClick={() => append({ value: "" })}
                  >
                    Add KeyPoints
                  </ButtonWithIcon>
                )}
              </div>
            ))}

            {errors.keypoints && (
              <p className={inputClass.error}>
                {errors.keypoints.message as string}
              </p>
            )}
          </div>
          {/* Repeat */}
          <div>
            <label className={inputClass.label}>Repeat</label>
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
          {/* Monthly */}
          {repeat === "Monthly" && (
            <div className="p-6 rounded-lg w-full max-w-md">
              <div className="grid grid-cols-2 gap-y-3 gap-x-10">
                {months.map((month) => (
                  <CustomCheckbox
                    key={month}
                    label={month}
                    checked={selectedMonths.includes(month)}
                    onChange={(checked) => toggleMonth(month, checked)}
                  />
                ))}
              </div>
            </div>
          )}
          {/* Weekly */}
          {repeat === "Weekly" && (
            <div className="p-6 rounded-lg max-w-md">
              <div className="grid grid-cols-2 gap-y-3 gap-x-10">
                {days.map((day) => (
                  <CustomCheckbox
                    key={day}
                    label={day}
                    checked={selectedDays.includes(day)}
                    onChange={(checked) => toggleDay(day, checked)}
                  />
                ))}
              </div>
            </div>
          )}
          {/* Resources */}
          <div>
            <label className={inputClass.label}>Resources Link</label>
            <input
              {...register("resources")}
              className={inputClass.input}
              placeholder="Enter resources link"
            />
          </div>
          {/* Tags */}
          <div>
            <label className={inputClass.label}>Tags</label>
            <input
              {...register("tags")}
              className={inputClass.input}
              placeholder="Enter tags"
            />
          </div>
          {/* Reminder */}
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
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-2 mt-6">
          <CommonButton type="submit" variant="primary">
            Create Task
          </CommonButton>

          <CommonButton type="button" variant="secondary">
            Save as Draft
          </CommonButton>
          <CommonButton
            type="button"
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
