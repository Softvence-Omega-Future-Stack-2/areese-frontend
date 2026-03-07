import React from "react";
import { LuMessageCircleMore } from "react-icons/lu";

export interface Note {
  id: number;
  text: string;
  author: string;
  time: string;
}

interface NotesFeedProps {
  notes: Note[];
  brandColor: string;
}

const NotesFeed: React.FC<NotesFeedProps> = ({ notes, brandColor }) => {
  if (notes.length === 0)
    return (
      <div className="bg-white rounded-[16px] border-[1.5px] border-[#EBEBED] flex flex-col items-center justify-center h-[180px] gap-3">
        <div
          className="w-13 h-13 rounded-[14px] flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(240,90,40,0.1), rgba(240,90,40,0.04))",
          }}
        >
          <LuMessageCircleMore size={22} color={brandColor} />
        </div>
        <div className="text-center">
          <p className="text-[#3F3F46] font-semibold text-[0.9rem]">
            No notes yet
          </p>
          <p className="text-[#A1A1AA] text-[0.8rem] mt-0.5">
            Add the first follow-up note below.
          </p>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col gap-3 flex-1 overflow-y-auto bg-white rounded-[16px] border-[1.5px] border-[#EBEBED]">
      <div
        className="h-[3px] w-full"
        style={{
          background: `linear-gradient(90deg, ${brandColor}, #FF8C5A)`,
        }}
      />
      <div className="flex flex-col p-5">
        {notes.map((note, i) => (
          <div
            key={note.id}
            className="bg-[#FAFAFA] border-[1.5px] border-[#F0F0F0] rounded-[12px] p-3.5 animate-[fadeIn_0.3s]"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[0.7rem] font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${brandColor}, #FF8C5A)`,
                  }}
                >
                  {note.author[0]}
                </div>
                <span className="text-[#18181B] font-semibold text-[0.82rem]">
                  {note.author}
                </span>
              </div>
              <span className="text-[#A1A1AA] text-[0.75rem] font-mono">
                {note.time}
              </span>
            </div>
            <p className="text-[#3F3F46] text-[0.875rem] leading-[1.6]">
              {note.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesFeed;
