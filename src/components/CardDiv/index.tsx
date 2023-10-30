'use client'

type CardVariants = "white" | "gray"

type CardProps = {
  variant?: CardVariants;
} & React.HTMLAttributes<HTMLDivElement>

const variants = {
  white: "border",
  gray: "bg-sub-30"
}

export default function CardDiv({ variant = "white", children, ...props}: CardProps) {
  const dafaultClasses = 'block items-center rounded-[8px] px-[24px] py-[16px]';

  return (
      <div {...props} className={`${dafaultClasses} ${variants[variant]} ${props.className}`}>
        {children}
      </div>
    );
}