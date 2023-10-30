'use client'

import { Icon } from "@iconify/react/dist/iconify.js"

type ButtonVariants = "primary" | "secondary"

type ButtonProps = {
  variant?: ButtonVariants
  iconLeft?: string
  iconRight?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const variants = {
  primary: "border-sub-30 bg-on-code hover:bg-on-code-70 text-white",
  secondary: "border-secondary hover:bg-on-code-70"
}

export default function Button({ variant = "primary", iconLeft, iconRight, children, ...props}: ButtonProps) {
  const dafaultClasses = 'flex items-center border gap-[8px] px-[12px] py-[4px] rounded-[8px]';

  return (
      <button {...props} className={`${dafaultClasses} ${variants[variant]} ${props.className}`} disabled>
        {iconLeft && <Icon icon={iconLeft} className="w-[32px] h-[32px]" />}
        {children}
        {iconRight && <Icon icon={iconRight} className="w-[32px] h-[32px]" />}
      </button>
    );
}