import CommonButton from "@/components/shared/CommonButton";
import CommonHeader from "@/components/shared/CommonHeader";
import DontForgetHeader from "@/components/shared/DontForgetHeader";
import { inputClass } from "@/features/task/CreateDashboardForm";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-brand sm:bg-brand/95">
      <DontForgetHeader />

      <div className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-background rounded-2xl shadow-xl p-6 sm:p-8">
          {/* Title */}
          <div className="flex flex-col items-center text-center mb-6">
            <CommonHeader size="2xl">Admin Login</CommonHeader>
            <CommonHeader className="text-text/60 text-sm">
              Sign in to access the admin dashboard
            </CommonHeader>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className={inputClass.label}>Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text/60" />
                <input
                  type="email"
                  placeholder="admin@example.com"
                  className={`${inputClass.input} pl-10`}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className={inputClass.label}>Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text/60" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`${inputClass.input} pl-10 pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text/60 hover:text-text"
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
              <label className="flex items-center gap-2 text-text/70">
                <input
                  type="checkbox"
                  className="rounded border-border accent-brand"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-text/50 hover:text-brand hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Button */}
            <CommonButton className="w-full">Login</CommonButton>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-text/50 mt-6">
            © 2026 Admin Panel
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
