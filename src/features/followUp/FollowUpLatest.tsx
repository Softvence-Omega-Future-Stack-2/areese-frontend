import ButtonWithIcon from "@/components/shared/ButtonWithIcon";
import CommonButton from "@/components/shared/CommonButton";
import CommonSelect from "@/components/shared/CommonSelect";
import CustomCheckbox from "@/components/shared/CustomCheckbox";
import DashboardSearch from "@/components/shared/DashboardSearch";
import DateTimeInput from "@/components/shared/DateTimeInput";
import SectionHeader from "@/components/shared/SectionHeader";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link2 } from "lucide-react";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";
import { IoIosLink } from "react-icons/io";
import { z } from "zod";
import { inputClass } from "../task/CreateTaskForm";

function ErrorMsg({ msg }: { msg?: string }) {
  return msg ? <p className="text-red-500 text-xs mt-1">{msg}</p> : null;
}
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
    .array(z.object({ value: z.string().min(1, "Keypoint cannot be empty") }))
    .min(1, "At least one keypoint required"),
});

type FormValues = z.infer<typeof formSchema>;

const FollowUpLatest = () => {
  const [taskType, setTaskType] = useState("Regular");
  const [repeat, setRepeat] = useState("Daily");
  const [reminder, setReminder] = useState("5min");
  const [videoPlatform, setVideoPlatform] = useState("Google Meet");
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectDashboard, setSelectDashboard] = useState("bobby");
  const [selectMonth, setSelectMonth] = useState("january");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { keypoints: [{ value: "" }] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "keypoints",
  });

  const toggleDay = (day: string, checked: boolean) =>
    setSelectedDays((p) =>
      checked ? [...p, day] : p.filter((d) => d !== day),
    );

  const toggleMonth = (month: string, checked: boolean) =>
    setSelectedMonths((p) =>
      checked ? [...p, month] : p.filter((m) => m !== month),
    );

  const onSubmit = (data: FormValues) => {
    console.log("FORM DATA", {
      ...data,
      selectedMonths,
      selectedDays,
      taskType,
      repeat,
      reminder,
      videoPlatform,
    });
  };

  return (
    <div className=" h-full  ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={
          "w-full overflow-hidden border border-border rounded-md p-4 sm:p-6 bg-white  "
        }
      >
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <SectionHeader
            title="Create a Follow-Up"
            description="Add a follow-up connected to an existing dashboard."
          />
          <div className="flex items-center gap-1">
            <p className=" hidden sm:block text-sm text-text">History</p>
            <DashboardSearch className="" />
            <CommonSelect
              item={[
                { value: "january", label: "January" },
                { value: "february", label: "February" },
                { value: "march", label: "March" },
                { value: "april", label: "April" },
                { value: "may", label: "May" },
                { value: "june", label: "June" },
                { value: "july", label: "July" },
                { value: "august", label: "August" },
                { value: "september", label: "September" },
                { value: "october", label: "October" },
                { value: "november", label: "November" },
                { value: "december", label: "December" },
              ]}
              value={selectMonth}
              onValueChange={(val) => setSelectMonth(val)}
              placeholder="Select month"
              w={120}
            />
          </div>
        </div>

        <div className="pt-2">
          <label className={inputClass.label}>Link Dashboard</label>
          <CommonSelect
            item={[
              { value: "bobby", label: "Bobby Johnson's Blue Website" },
              { value: "marketing", label: "Marketing Dashboard" },
              { value: "sales", label: "Sales Q4 2025" },
            ]}
            value={selectDashboard}
            onValueChange={(val) => setSelectDashboard(val)}
            placeholder="Select dashboard"
          />
          {/* Linked Dashboard Preview */}
          <div className="flex items-start gap-3 bg-bg border border-border rounded-xl px-3 py-3 mt-3">
            <div className="w-8 h-8 rounded-full bg-today-accent flex items-center justify-center shrink-0">
              <Link2 size={14} className="text-white" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-orange-500 uppercase tracking-wider">
                Linked Dashboard
              </p>
              <p className="text-sm font-bold text-text mt-0.5">
                {selectDashboard} Blue Website
              </p>
              <p className="text-xs text-text/50 mt-0.5">
                Created: October 2025
              </p>
              <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                <IoIosLink size={10} className="text-today-accent" /> Key
                points: brandihomepage, pricing
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
          <div>
            <label className={inputClass.label}>Follow-Up Title</label>
            <input
              {...register("title")}
              type="text"
              placeholder="Enter follow-up title..."
              className={inputClass.input}
            />
            <ErrorMsg msg={errors.title?.message} />
          </div>

          <div>
            <label className={inputClass.label}>Invitees (max 10)</label>
            <input
              {...register("invitees")}
              type="text"
              placeholder="Enter invitees"
              className={inputClass.input}
            />
          </div>
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
              placeholder="Select type"
              className="w-full"
            />
          </div>

          {taskType === "Video" && (
            <>
              <div className="">
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
              <div className="">
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

          <DateTimeInput
            label="Time & Date"
            register={register("endDate")}
            error={errors.endDate}
            inputClass={inputClass.input}
            labelClass={inputClass.label}
            errorClass={inputClass.error}
          />

          <div>
            <label className={inputClass.label}>
              Add Keypoints To This Task
            </label>
            <div className="space-y-2">
              {fields.map((field, index) => (
                <div key={field.id} className="flex  gap-2">
                  <input
                    {...register(`keypoints.${index}.value`)}
                    placeholder="Enter keypoint"
                    className={inputClass.input}
                  />
                  {fields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="border border-border cursor-pointer  hover:bg-late-accent hover:text-white px-3 rounded-md h-[42px]"
                    >
                      <FiTrash2 size={15} />
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
            </div>
            <ErrorMsg msg={errors.keypoints?.message as string} />
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
              value={repeat}
              onValueChange={setRepeat}
              className="w-full"
              placeholder="Select repeat"
            />

            {/* Monthly checkboxes */}
            {repeat === "Monthly" && (
              <div className="mt-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  Select Months
                </p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-6">
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

            {repeat === "Weekly" && (
              <div className="mt-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  Select Days
                </p>
                <div className="grid   grid-cols-2 gap-y-3 gap-x-6">
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
          </div>

          <div>
            <label className={inputClass.label}>Resources Link</label>
            <div className="">
              <input
                {...register("resources")}
                placeholder="Enter resources link"
                className={inputClass.input}
              />
            </div>
          </div>
          <div>
            <label className={inputClass.label}>Video Platform</label>
            <CommonSelect
              item={[
                { value: "Google Meet", label: "Google Meet" },
                { value: "Zoom", label: "Zoom" },
                { value: "Teams", label: "Teams" },
              ]}
              value={videoPlatform}
              onValueChange={setVideoPlatform}
              className="w-full"
            />
          </div>

          <div>
            <label className={inputClass.label}>Tags</label>
            <input
              {...register("tags")}
              placeholder="Enter tags"
              className={inputClass.input}
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
                { value: "1day", label: "1 Day" },
              ]}
              value={reminder}
              onValueChange={setReminder}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <CommonButton>Create Follow-Up</CommonButton>
          <CommonButton variant="secondary">Cancel</CommonButton>
        </div>
      </form>
    </div>
  );
};

export default FollowUpLatest;
