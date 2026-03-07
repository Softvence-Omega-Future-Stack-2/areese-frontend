import React from "react";
import { CiCalendar } from "react-icons/ci";
import { FiEye } from "react-icons/fi";

interface TaskHeaderCardProps {
  label: string;
  date: string;
  time: string;
  status: "Pending" | "Done";
  notesCount: number;
}

const TaskHeaderCard: React.FC<TaskHeaderCardProps> = ({
  label,
  date,
  time,
  status,
  notesCount,
}) => {
  return (
    <div className="bg-white rounded-[16px] border-[1.5px] border-[#EBEBED] px-7 py-5 flex items-center justify-between">
      <div>
        <h2 className="text-[#18181B] font-bold text-[1.15rem] tracking-[-0.025em] mb-1.5">
          {label}
        </h2>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[#71717A] text-[0.8rem]">
            <CiCalendar />
            {date} · {time}
          </div>
          <span
            className={`text-[0.72rem] font-semibold px-2.5 py-0.5 rounded-full tracking-[0.02em] ${
              status === "Pending"
                ? "bg-[#FFF4E5] text-[#F05A28]"
                : "bg-[#ECFDF5] text-[#16A34A]"
            }`}
          >
            {status}
          </span>
          <button className="flex items-center gap-1 text-[#71717A] text-[0.8rem] hover:opacity-70 transition-opacity">
            <FiEye />
            View task
          </button>
        </div>
      </div>
      <div className="text-right">
        <span className="text-[#18181B] font-extrabold text-[1.6rem] tracking-[-0.04em]">
          {notesCount}
        </span>
        <p className="text-[#71717A] text-[0.75rem] font-medium mt-[-2px]">
          {notesCount === 1 ? "note" : "notes"}
        </p>
      </div>
    </div>
  );
};

export default TaskHeaderCard;
