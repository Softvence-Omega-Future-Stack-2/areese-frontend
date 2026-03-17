import React, { type ReactNode } from "react";

interface CommonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
}

const CommonButton: React.FC<CommonButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  type = "button",
  ...props
}) => {
  const baseClasses =
    "px-4  py-2 rounded-md font-medium transition text-sm sm:text-base  cursor-pointer whitespace-nowrap flex items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-none disabled:hover:bg-cta    ";
  const variantClasses = {
    primary: "bg-cta hover:bg-late-accent text-white ",
    secondary: "bg-white border border-border text-text",
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CommonButton;
