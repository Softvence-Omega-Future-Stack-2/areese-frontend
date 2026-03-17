import CommonButton from "@/components/shared/CommonButton";
import CommonHeader from "@/components/shared/CommonHeader";
import { inputClass } from "@/features/task/CreateTaskForm";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 sm:bg-brand/50">
      <div className="w-full max-w-md bg-background rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] p-8">
        <div className=" flex flex-col items-center  mb-8">
          <CommonHeader size="2xl">Admin Login</CommonHeader>
          <CommonHeader>Sign in to access the admin dashboard</CommonHeader>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className={inputClass.label}>Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text" />
              <input
                type="email"
                placeholder="admin@example.com"
                className={` ${inputClass.input} pl-10`}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className={inputClass.label}>Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={` ${inputClass.input} pl-10`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-border" />
              Remember me
            </label>
            <button
              type="button"
              className="text-text/50 hover:underline cursor-pointer"
            >
              Forgot password?
            </button>
          </div>

          <CommonButton className=" w-full!">Login</CommonButton>
        </form>

        <p className="text-center text-xs text-text mt-6">© 2026 Admin Panel</p>
      </div>
    </div>
  );
};

export default Login;
