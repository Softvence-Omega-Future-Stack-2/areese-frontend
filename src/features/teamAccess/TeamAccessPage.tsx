import CardAction from "@/components/shared/CardAction";
import CommonButton from "@/components/shared/CommonButton";
import CommonSelect from "@/components/shared/CommonSelect";
import DateInput from "@/components/shared/DateInput";
import SectionHeader from "@/components/shared/SectionHeader";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { inputClass } from "../task/CreateTaskForm";

// TYPES
type Role = "ADMIN" | "COLLABORATOR";

interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  tempPassword: string;
}

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

export default function TeamAccessPage() {
  const [collaborators, setCollaborators] = useState<User[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "COLLABORATOR" as Role,
  });
  const [projectForm, setProjectForm] = useState({
    name: "",
    startDate: "",
    endDate: "",
  });

  const [updateModal, setUpdateModal] = useState<{
    open: boolean;
    projectId: string | null;
    message: string;
  }>({ open: false, projectId: null, message: "" });

  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  const generatePassword = () => Math.random().toString(36).slice(-8);

  // INVITE COLLABORATOR
  const handleInvite = () => {
    if (!form.name || !form.email) return showToast("Fill all fields");

    if (
      form.role === "ADMIN" &&
      collaborators.find((c) => c.role === "ADMIN")
    ) {
      return showToast("Only 1 admin allowed");
    }

    if (
      form.role === "COLLABORATOR" &&
      collaborators.filter((c) => c.role === "COLLABORATOR").length >= 10
    ) {
      return showToast("Max 10 collaborators allowed");
    }

    const newUser: User = {
      id: Date.now().toString(),
      name: form.name,
      email: form.email,
      role: form.role,
      tempPassword: generatePassword(),
    };

    setCollaborators((prev) => [...prev, newUser]);
    setForm({ name: "", email: "", role: "COLLABORATOR" });
    showToast(`${form.role} added`);
  };

  // CREATE PROJECT DASHBOARD
  const handleCreateProject = () => {
    if (!projectForm.name || !projectForm.startDate || !projectForm.endDate)
      return showToast("Fill all fields");

    if (projects.length >= 11) return showToast("Max 11 dashboards");

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
    showToast("Project created");
  };

  // ADD UPDATE
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
    showToast("Update added");
  };

  // DELETE PROJECT
  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    showToast("Project deleted");
  };

  // EXTEND PROJECT DATE
  const extendProject = (id: string) => {
    const newDate = prompt("New End Date YYYY-MM-DD");
    if (!newDate) return;

    setProjects((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, endDate: newDate, archived: false } : p,
      ),
    );

    showToast("Project updated");
  };

  // COPY TO CLIPBOARD
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    showToast("Copied");
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

  return (
    <div className="space-y-6 relative">
      {toast && (
        <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded shadow-lg z-50">
          {toast}
        </div>
      )}

      {/* STEP 1: INVITE MEMBERS */}
      <div className="bg-white border rounded-2xl p-5 shadow">
        <div className="flex items-center gap-2">
          <span className="bg-cta text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">
            1
          </span>
          <SectionHeader title="Invite Member" className="pb-0!" />
        </div>
        <p className="text-text/50 pb-2">
          Invite a new collaborator by entering their details.
        </p>

        <div className="space-y-3">
          <div>
            <label className={inputClass.label}>Full Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className={inputClass.input}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <label className={inputClass.label}>Role</label>
          <CommonSelect
            item={[
              { value: "ADMIN", label: "Admin" },
              { value: "COLLABORATOR", label: "Collaborator" },
            ]}
            value={form.role}
            onValueChange={(val) => setForm({ ...form, role: val as Role })}
            className="w-full"
            placeholder="Select role"
          />

          <div>
            <label className={inputClass.label}>Email Address</label>
            <input
              type="text"
              placeholder="Enter email"
              className={inputClass.input}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <CommonButton onClick={handleInvite}>Add Collaborator</CommonButton>
        </div>
        <div className="mt-5 space-y-3">
          {collaborators.map((c) => (
            <div key={c.id} className="border rounded-xl p-4 bg-white relative">
              {/* Success header */}

              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1">
                  {" "}
                  <span>
                    <IoCheckmarkCircle className="text-green-600 text-2xl" />
                  </span>
                  <SectionHeader title="Collaborator Added" className="pb-0!" />
                  <span className="text-green-600">✓</span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <p className="text-sm text-text/50">Name:</p>
                <p className="font-medium">{c.name}</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm text-text/50">Role:</p>
                <p className="text-sm text-text/50">{c.role}</p>
              </div>

              {/* Email input */}
              <div className="mt-2">
                <label className={inputClass.label}>Email</label>
                <input
                  type="text"
                  className={`${inputClass.input} cursor-text`}
                  value={c.email}
                  readOnly
                />
              </div>

              {/* Copy login link */}
              <div className="mt-2">
                <CommonButton
                  onClick={() =>
                    copyToClipboard(
                      `https://yourapp.com/login?email=${c.email}&tempPassword=${c.tempPassword}`,
                    )
                  }
                >
                  Copy Login Link
                </CommonButton>
              </div>

              <p className="text-sm text-text/50 mt-2">
                Send the access link to {c.name} to log in.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* STEP 2: CREATE PROJECT DASHBOARD */}
      <div className="bg-white border rounded-2xl p-5 shadow">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-cta text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">
            2
          </span>
          <SectionHeader title="Collaborator Dashboard" className="pb-0!" />
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

        <div className="space-y-4">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`border rounded-xl p-4 ${p.archived ? "opacity-50" : ""}`}
            >
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-text/50">
                {p.startDate} → {p.endDate}
              </p>

              <div className="mt-3 space-y-2">
                {p.updates.map((u, i) => (
                  <div key={i} className="border rounded p-2 text-sm">
                    <p>{u.message}</p>
                    <p className="text-xs text-text/50">{u.date}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-3 mt-3">
                <CommonButton
                  onClick={() =>
                    setUpdateModal({ open: true, projectId: p.id, message: "" })
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
          ))}
        </div>
      </div>

      {/* UPDATE MODAL */}
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

            <textarea
              className={inputClass.input}
              rows={4}
              placeholder="Write update..."
              value={updateModal.message}
              onChange={(e) =>
                setUpdateModal({ ...updateModal, message: e.target.value })
              }
            />

            <CommonButton onClick={handleAddUpdate}>Submit Update</CommonButton>
          </div>
        </div>
      )}
    </div>
  );
}
