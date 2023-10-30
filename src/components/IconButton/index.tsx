'use client'

import { Icon } from "@iconify/react/dist/iconify.js"

type IconButtonProps = {
  icon: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function IconButton({ icon, ...props}: IconButtonProps) {
  const dafaultClasses = '';

  return (
      <button {...props} className={`${dafaultClasses} ${props.className}`} disabled>
        <Icon icon={icon} className="w-[32px] h-[32px]" />
      </button>
    );
}