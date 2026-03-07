import CommonButton from "@/components/shared/CommonButton";
import CommonSelect, {
  type SelectOption,
} from "@/components/shared/CommonSelect";
import { useState } from "react";
import AddNoteBox from "./AddNoteBox";
import FollowSidebar from "./FollowSidebar";
import NotesFeed from "./NotesFeed";
import TaskHeaderCard from "./TaskHeaderCard";

const BRAND = "#F05A28";

type TaskId = "1" | "2" | "3";

const tasks = [
  {
    id: "1" as TaskId,
    label: "Molestias neque qui",
    date: "Mar 04, 2026",
    time: "11:48 AM EST",
    status: "Pending",
  },
  {
    id: "2" as TaskId,
    label: "Adipiscing elit sed",
    date: "Mar 03, 2026",
    time: "09:30 AM EST",
    status: "Done",
  },
  {
    id: "3" as TaskId,
    label: "Lorem ipsum dolor",
    date: "Mar 02, 2026",
    time: "02:15 PM EST",
    status: "Pending",
  },
];

const taskOptions: readonly SelectOption<TaskId>[] = tasks.map((t) => ({
  value: t.id,
  label: `${t.label} — ${t.date}`,
}));

const sidebarItems = [
  { id: 1, label: "project beta", count: 2 },
  { id: 2, label: "project alpha", count: 5 },
  { id: 3, label: "client review", count: 0 },
];

type Note = { id: number; text: string; author: string; time: string };
const initialNotes: Record<TaskId, Note[]> = { "1": [], "2": [], "3": [] };

export default function FollowUps() {
  const [selectedTask, setSelectedTask] = useState(tasks[0]);
  const [activeSidebar, setActiveSidebar] = useState(1);
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState<Record<TaskId, Note[]>>(initialNotes);

  const currentNotes = notes[selectedTask.id] || [];

  const handleAddNote = () => {
    if (!noteText.trim()) return;
    const newNote: Note = {
      id: Date.now(),
      text: noteText.trim(),
      author: "You",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setNotes((prev) => ({
      ...prev,
      [selectedTask.id]: [...(prev[selectedTask.id] || []), newNote],
    }));
    setNoteText("");
  };

  return (
    <div className="flex flex-col">
      <header className="flex items-center justify-between bg-white p-4 rounded-md sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium tracking-wide">
              Select Task :
            </label>
            <CommonSelect<TaskId>
              value={selectedTask.id}
              item={taskOptions}
              w={280}
              placeholder="Select a task"
              onValueChange={(val) => {
                const t = tasks.find((x) => x.id === val);
                if (t) setSelectedTask(t);
              }}
            />
          </div>

          <CommonButton>View Thread</CommonButton>
        </div>
      </header>

      <div className="flex flex-1 gap-5  py-6">
        <FollowSidebar
          items={sidebarItems}
          activeId={activeSidebar}
          onChange={(id) => setActiveSidebar(id as number)}
        />

        <main className="flex-1 flex flex-col gap-4 min-w-0">
          <TaskHeaderCard
            label={selectedTask.label}
            date={selectedTask.date}
            time={selectedTask.time}
            status={selectedTask.status as "Pending" | "Done"}
            notesCount={currentNotes.length}
          />
          <NotesFeed notes={currentNotes} brandColor={BRAND} />
          <AddNoteBox
            noteText={noteText}
            setNoteText={setNoteText}
            handleAddNote={handleAddNote}
          />
        </main>
      </div>
    </div>
  );
}
