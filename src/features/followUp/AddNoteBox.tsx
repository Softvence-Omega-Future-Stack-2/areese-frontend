import CommonButton from "@/components/shared/CommonButton";
import { Plus } from "lucide-react";
import React from "react";
import { inputClass } from "../task/CreateTaskForm";

interface AddNoteBoxProps {
  noteText: string;
  setNoteText: (text: string) => void;
  handleAddNote: () => void;
}

const AddNoteBox: React.FC<AddNoteBoxProps> = ({
  noteText,
  setNoteText,
  handleAddNote,
}) => {
  return (
    <div className="bg-white border border-border rounded-2xl p-4">
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleAddNote();
        }}
        placeholder="Write a follow-up note..."
        className={inputClass.input}
      />
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[#A1A1AA] text-[0.75rem]">
          Saved with your name and timestamp.
        </div>

        <CommonButton onClick={handleAddNote} disabled={!noteText.trim()}>
          <Plus size={16} />
          Add Note
        </CommonButton>
      </div>
    </div>
  );
};

export default AddNoteBox;
