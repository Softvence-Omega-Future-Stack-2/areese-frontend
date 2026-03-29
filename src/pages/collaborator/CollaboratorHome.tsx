import CardAction from "@/components/shared/CardAction";
import CommonButton from "@/components/shared/CommonButton";
import DashboardTopSection from "@/components/shared/DashboardTopSection";
import DateInput from "@/components/shared/DateInput";
import SectionHeader from "@/components/shared/SectionHeader";
import { brandColors } from "@/components/shared/StatCards";
import { inputClass } from "@/features/task/CreateDashboardForm";
import { formatDate, formatDateWithTime } from "@/lib/date";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { toast } from "react-toastify";
interface UpdateLog {
  message: string;
  date: string;
}

interface Project {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  updates: UpdateLog[];
  archived: boolean;
}
const CollaboratorHome = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [extendModal, setExtendModal] = useState<{
    open: boolean;
    projectId: string | null;
    endDate: string;
  }>({
    open: false,
    projectId: null,
    endDate: "",
  });
  const [projectForm, setProjectForm] = useState({
    name: "",
    startDate: "",
    endDate: "",
  });

  const handleCreateProject = () => {
    if (!projectForm.name || !projectForm.startDate || !projectForm.endDate)
      return toast.error("Fill all fields");

    if (projects.length >= 11) return toast.error("Max 11 dashboards");

    const newProject: Project = {
      id: Date.now().toString(),
      name: projectForm.name,
      startDate: projectForm.startDate,
      endDate: projectForm.endDate,
      updates: [],
      archived: false,
    };

    setProjects((prev) => [...prev, newProject]);
    setProjectForm({ name: "", startDate: "", endDate: "" });
    toast.success("Project created");
  };

  const handleAddUpdate = () => {
    if (!updateModal.message || !updateModal.projectId) return;

    setProjects((prev) =>
      prev.map((p) =>
        p.id === updateModal.projectId
          ? {
              ...p,
              updates: [
                ...p.updates,
                {
                  message: updateModal.message,
                  date: new Date().toLocaleString(),
                },
              ],
            }
          : p,
      ),
    );

    setUpdateModal({ open: false, projectId: null, message: "" });
    toast.success("Update added");
  };

  // DELETE PROJECT
  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    toast.success("Project deleted");
  };

  // EXTEND PROJECT DATE
  const extendProject = (id: string) => {
    setExtendModal({
      open: true,
      projectId: id,
      endDate: "",
    });
  };
  const handleExtendSubmit = () => {
    if (!extendModal.endDate || !extendModal.projectId)
      return toast.error("Select date & time");

    setProjects((prev) =>
      prev.map((p) =>
        p.id === extendModal.projectId
          ? { ...p, endDate: extendModal.endDate, archived: false }
          : p,
      ),
    );

    setExtendModal({ open: false, projectId: null, endDate: "" });
    toast.success("Project timeline updated");
  };

  // AUTO ARCHIVE
  useEffect(() => {
    const interval = setInterval(() => {
      setProjects((prev) =>
        prev.map((p) => ({ ...p, archived: new Date(p.endDate) < new Date() })),
      );
    }, 60000);

    return () => clearInterval(interval);
  }, []);
  const [updateModal, setUpdateModal] = useState<{
    open: boolean;
    projectId: string | null;
    message: string;
  }>({ open: false, projectId: null, message: "" });
  return (
    <div>
      <DashboardTopSection
        title="View Dashboard"
        description="Monitor your activities, track progress, and manage tasks efficiently."
      />
      <div className="bg-white border rounded-2xl p-5 shadow">
        <div className="flex items-center gap-2 mb-3">
          <SectionHeader
            title="Create Project"
            description="Create or manage projects"
            className=""
          />
        </div>

        <div className="space-y-3 mb-4">
          <label className={inputClass.label}>Project Name</label>
          <input
            className={inputClass.input}
            placeholder="Project Name"
            value={projectForm.name}
            onChange={(e) =>
              setProjectForm({ ...projectForm, name: e.target.value })
            }
          />

          <div className="grid grid-cols-1  sm:grid-cols-2 gap-2">
            <DateInput
              label="Start Date"
              value={projectForm.startDate}
              onChange={(value) =>
                setProjectForm({ ...projectForm, startDate: value })
              }
            />
            <DateInput
              label="End Date"
              value={projectForm.endDate}
              onChange={(value) =>
                setProjectForm({ ...projectForm, endDate: value })
              }
            />
          </div>

          <CommonButton onClick={handleCreateProject}>
            Create Project
          </CommonButton>
        </div>
      </div>
      {projects.length > 0 && (
        <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6">
          {projects.map((p, i) => {
            const bgColor = brandColors[i % brandColors.length];

            return (
              <div
                key={p.id}
                className={`border h-fit border-border ${bgColor} rounded-xl p-4 ${p.archived ? "opacity-50" : ""}`}
              >
                <div className="flex items-center gap-1">
                  <p>Project: </p>
                  <p className="text-sm text-text">{p.name}</p>
                </div>
                <div className="flex items-center gap-1">
                  <p className="font-medium">Start Date :</p>
                  <p className="text-sm text-text">{formatDate(p.startDate)}</p>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-sm font-medium">End Date :</p>
                  <p className="text-sm text-text">{formatDate(p.endDate)}</p>
                </div>

                <div className="mt-3 space-y-2">
                  {p.updates.map((u, i) => (
                    <div
                      key={i}
                      className="border bg-bg rounded-md p-2 text-sm"
                    >
                      <p>{u.message}</p>
                      <p className="text-xs text-text">
                        {formatDateWithTime(u.date)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-3 mt-3">
                  <CommonButton
                    onClick={() =>
                      setUpdateModal({
                        open: true,
                        projectId: p.id,
                        message: "",
                      })
                    }
                  >
                    Add Update
                  </CommonButton>
                  <CardAction onEdit={() => extendProject(p.id)} />
                  <CardAction onDelete={() => deleteProject(p.id)} />
                </div>

                {p.archived && (
                  <p className="text-red-500 text-xs mt-2">Archived</p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {updateModal.open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-xl w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-3">
              <SectionHeader title="Add Update" />
              <button
                className="cursor-pointer"
                onClick={() =>
                  setUpdateModal({ open: false, projectId: null, message: "" })
                }
              >
                <X />
              </button>
            </div>

            <label className={inputClass.label}>Write notes</label>
            <textarea
              className={inputClass.input}
              rows={4}
              placeholder="Write update..."
              value={updateModal.message}
              onChange={(e) =>
                setUpdateModal({ ...updateModal, message: e.target.value })
              }
            />

            <CommonButton onClick={handleAddUpdate} className="mt-2!">
              Submit Update
            </CommonButton>
          </div>
        </div>
      )}
      {extendModal.open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-xl w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-3">
              <SectionHeader title="Extend Project Timeline" />
              <button
                onClick={() =>
                  setExtendModal({ open: false, projectId: null, endDate: "" })
                }
              >
                <X />
              </button>
            </div>

            {/* Date + Time input */}
            <div className="space-y-3">
              <div>
                <label className={inputClass.label}>New End Date & Time</label>
                <div className="relative">
                  {" "}
                  <input
                    type="datetime-local"
                    className={` ${inputClass.input}  [&::-webkit-calendar-picker-indicator]:opacity-0 
                  [&::-webkit-calendar-picker-indicator]:absolute 
                  [&::-webkit-calendar-picker-indicator]:right-0 
                  [&::-webkit-calendar-picker-indicator]:w-10 
                  [&::-webkit-calendar-picker-indicator]:h-full 
                  [&::-webkit-calendar-picker-indicator]:cursor-pointer`}
                    value={extendModal.endDate}
                    onChange={(e) =>
                      setExtendModal({
                        ...extendModal,
                        endDate: e.target.value,
                      })
                    }
                  />
                  <FaRegCalendarAlt
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text pointer-events-none"
                    size={16}
                  />
                </div>
              </div>
            </div>

            <CommonButton onClick={handleExtendSubmit} className="mt-3!">
              Update Timeline
            </CommonButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollaboratorHome;
