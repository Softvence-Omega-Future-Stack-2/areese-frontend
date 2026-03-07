// ListDetails.tsx

interface Task {
  id: number;
  title: string;
  invitees?: string[];
  taskType: string;
  dateTime?: string;
  videoPlatform?: string;
  keypoints?: string[];
  repeat?: {
    type: "None" | "Daily" | "Weekly" | "Monthly" | "Yearly";
    days?: string[];
    // you can extend with months, dates, etc.
  };
  tags?: string[];
  resourcesLink?: string;
  reminder?: string;
  status?: "late" | "today" | "followup" | "upcoming" | "default";
}

const statusStyles = {
  late: {
    bg: "bg-[--color-late-bg]",
    accent: "bg-[--color-late-accent] text-white",
    textAccent: "text-[--color-late-accent]",
  },
  today: {
    bg: "bg-[--color-today-bg]",
    accent: "bg-[--color-today-accent] text-white",
    textAccent: "text-[--color-today-accent]",
  },
  followup: {
    bg: "bg-[--color-followup-bg]",
    accent: "bg-[--color-followup-accent] text-white",
    textAccent: "text-[--color-followup-accent]",
  },
  upcoming: {
    bg: "bg-[--color-upcoming-bg]",
    accent: "bg-[--color-upcoming-accent] text-white",
    textAccent: "text-[--color-upcoming-accent]",
  },
  default: {
    bg: "bg-white",
    accent: "bg-gray-500 text-white",
    textAccent: "text-gray-600",
  },
};
const tasks: Task[] = [
  {
    id: 1,
    title: "Weekly Team Sync - Project Alpha",
    invitees: ["rahim.dev", "sara_ui", "karim_pm", "nisha.design"],
    taskType: "Video",
    dateTime: "2026-03-11T11:00:00+06:00",
    videoPlatform: "Zoom",
    keypoints: [
      "Sprint progress update",
      "Blockers & dependencies",
      "Next sprint planning",
      "Client feedback review",
    ],
    repeat: {
      type: "Weekly",
      days: ["Wednesday"],
    },
    tags: ["project-alpha", "team-sync", "weekly"],
    resourcesLink: "https://notion.so/project-alpha-sprint-12",
    reminder: "10 minutes",
  },
];

const ListDetails = () => {
  return (
    <div className={`space-y-4 `}>
      {tasks.map((task) => {
        const style =
          statusStyles[(task.status as keyof typeof statusStyles) || "default"];

        return (
          <div
            key={task.id}
            className={`
              rounded-xl border border-[--color-border] overflow-hidden
              shadow-sm hover:shadow-md transition-all duration-200
              ${style.bg}
            `}
          >
            {/* Header */}
            <div
              className={`px-5 py-3 flex items-center justify-between ${style.accent}`}
            >
              <h3 className="font-semibold text-lg truncate max-w-[70%]">
                {task.title}
              </h3>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/20">
                {task.taskType}
              </span>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4">
              {/* Date & Platform */}
              {(task.dateTime || task.videoPlatform) && (
                <div className="flex flex-wrap gap-4 text-sm">
                  {task.dateTime && (
                    <div>
                      <span className={`font-medium ${style.textAccent}`}>
                        When:
                      </span>{" "}
                      {new Date(task.dateTime).toLocaleString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </div>
                  )}
                  {task.videoPlatform && (
                    <div>
                      <span className={`font-medium ${style.textAccent}`}>
                        Platform:
                      </span>{" "}
                      {task.videoPlatform}
                    </div>
                  )}
                </div>
              )}

              {/* Reminder */}
              {task.reminder && (
                <div className="text-sm">
                  <span className={`font-medium ${style.textAccent}`}>
                    Reminder:
                  </span>{" "}
                  {task.reminder} before
                </div>
              )}

              {/* Invitees */}
              {task.invitees && task.invitees.length > 0 && (
                <div className="text-sm">
                  <span className={`font-medium ${style.textAccent}`}>
                    People:
                  </span>{" "}
                  <div className="inline-flex flex-wrap gap-1 mt-1">
                    {task.invitees.map((person, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 bg-white/60 rounded-full text-xs"
                      >
                        {person}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Keypoints */}
              {task.keypoints && task.keypoints.length > 0 && (
                <div>
                  <h4
                    className={`font-medium text-sm mb-2 ${style.textAccent}`}
                  >
                    Key Points
                  </h4>
                  <ul className="space-y-1.5 text-sm pl-5 list-disc marker:text-[--color-upcoming-accent]">
                    {task.keypoints.map((point, i) => (
                      <li key={i} className="text-gray-700">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Repeat & Tags */}
              <div className="flex flex-wrap gap-6 text-sm">
                {task.repeat && task.repeat.type !== "None" && (
                  <div>
                    <span className={`font-medium ${style.textAccent}`}>
                      Repeats:
                    </span>{" "}
                    {task.repeat.type}
                    {task.repeat.days && task.repeat.days.length > 0 && (
                      <span className="ml-1">
                        ({task.repeat.days.join(", ")})
                      </span>
                    )}
                  </div>
                )}

                {task.tags && task.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {task.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 bg-white/50 rounded-full text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListDetails;
