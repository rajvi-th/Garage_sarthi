import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  icon,
  ...props
}) => {
  const baseStyles =
    "rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover shadow-sm px-6 py-2.5 text-sm",

    secondary:
      "bg-white text-text-dark hover:bg-gray-50 border border-gray-200 px-6 py-2.5 text-sm",

    outline:
      "bg-transparent text-white border border-white hover:bg-white/10 px-6 py-2.5 text-sm",

    dark:
      "bg-text-dark text-white hover:bg-black px-6 py-2.5 text-sm",

    // 🔥 HERO GRADIENT BUTTON
    hero:
      "px-6 py-2.5 text-base font-semibold text-white shadow-lg " +
      "bg-[linear-gradient(92.52deg,#B22F0E_2.1%,#D73D17_105.99%)] " +
      "hover:opacity-95 active:scale-[0.98] cursor-pointer",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="w-4 h-4">{icon}</span>}
    </button>
  );
};

export default Button;
