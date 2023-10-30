'use client'

import { Icon } from "@iconify/react/dist/iconify.js"

type ButtonVariants = "primary" | "secondary"

type ButtonProps = {
  variant?: ButtonVariants
  iconLeft?: string
  iconRight?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const variants = {
  primary: "flex items-center border border-sub-30 bg-on-code hover:bg-on-code-70 text-white gap-[8px] px-[12px] py-[4px] rounded-[8px]",
  secondary: "flex items-center border border-secondary gap-[8px] hover:bg-on-code-70 px-[12px] py-[4px] rounded-[8px]"
}

export default function Button({ variant = "primary", iconLeft, iconRight, children, ...props}: ButtonProps) {
  const dafaultClasses = '';

  return (
      <button {...props} className={`${dafaultClasses} ${variants[variant]} ${props.className}`} disabled>
        {iconLeft && <Icon icon={iconLeft} className="w-[32px] h-[32px]" />}
        {children}
        {iconRight && <Icon icon={iconRight} className="w-[32px] h-[32px]" />}
      </button>
    );
}