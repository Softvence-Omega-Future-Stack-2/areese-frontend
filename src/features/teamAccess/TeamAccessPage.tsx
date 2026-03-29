import CommonButton from "@/components/shared/CommonButton";
import SectionHeader from "@/components/shared/SectionHeader";
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { toast } from "react-toastify";
import { inputClass } from "../task/CreateDashboardForm";

import { brandColors } from "@/components/shared/StatCards";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
}

// ✅ ZOD SCHEMA
const collaboratorSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof collaboratorSchema>;

export default function TeamAccessPage() {
  const [collaborators, setCollaborators] = useState<User[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(collaboratorSchema),
  });

  const handleInvite = (data: FormData) => {
    if (collaborators.length >= 10) {
      return toast.error("You can only add up to 10 collaborators");
    }
    const newUser = {
      id: Date.now().toString(),
      ...data,
    };

    setCollaborators((prev) => [...prev, newUser]);
    reset();
    toast.success(`${data.name} added`);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };

  return (
    <div className="space-y-6 relative">
      <div className="bg-white border rounded-2xl p-5 shadow">
        <SectionHeader
          title="Invite Member"
          description=" Invite a new collaborator by entering their details."
          className="mb-2"
        />

        <form onSubmit={handleSubmit(handleInvite)}>
          <div className="space-y-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={inputClass.label}>Full Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className={inputClass.input}
                {...register("name")}
              />
              {errors.name && (
                <p className={inputClass.error}>{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className={inputClass.label}>Email Address</label>
              <input
                type="text"
                placeholder="Enter email"
                className={inputClass.input}
                {...register("email")}
              />
              {errors.email && (
                <p className={inputClass.error}>{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className={inputClass.label}>User Name</label>
              <input
                type="text"
                placeholder="Enter username"
                className={inputClass.input}
                {...register("username")}
              />
              {errors.username && (
                <p className={inputClass.error}>{errors.username.message}</p>
              )}
            </div>

            <div>
              <label className={inputClass.label}>Temporary Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className={inputClass.input}
                {...register("password")}
              />
              {errors.password && (
                <p className={inputClass.error}>{errors.password.message}</p>
              )}
            </div>
          </div>

          <CommonButton type="submit" className="mt-4">
            Add Collaborator
          </CommonButton>
        </form>
      </div>

      <div className="mt-5 space-y-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {collaborators.map((c, i) => {
          const bgColor = brandColors[i % brandColors.length];

          return (
            <div
              key={c.id}
              className={`border rounded-xl p-4  relative ${bgColor}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1">
                  <span className="bg-cta text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">
                    {i + 1}
                  </span>
                  <SectionHeader title="Collaborator Added" className="pb-0!" />
                  <span className="text-cta">
                    <GiCheckMark />
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <p className="text-sm text-text">Name:</p>
                <p className="text-sm text-text">{c.name}</p>
              </div>

              <div className="flex items-center gap-1">
                <p className="text-sm text-text">Password:</p>
                <p className="text-sm text-text">{c.password}</p>
              </div>

              <div className="flex items-center gap-1">
                <p className="text-sm text-text">username:</p>
                <p className="text-sm text-text">{c.username}</p>
              </div>

              <div className="mt-2">
                <label className={inputClass.label}>Email</label>
                <input
                  type="text"
                  className={`${inputClass.input} cursor-text`}
                  value={c.email}
                  readOnly
                />
              </div>

              <div className="my-4">
                <CommonButton
                  onClick={() =>
                    copyToClipboard(
                      `https://yourapp.com/login?email=${c.email}&tempPassword=${c.password}`,
                    )
                  }
                >
                  Copy Login Link
                </CommonButton>
              </div>

              <p className="text-sm text-text ">
                Send the access link to {c.name} to log in.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
