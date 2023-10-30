type FooterProps = { } & React.HTMLAttributes<HTMLDivElement>

export default function Footer({ ...props }: FooterProps) {
  const dafaultClasses = 'bg-black-tone text-white flex h-[60px] justify-center items-center shrink-0 px-14 py-6';
  
  return (
    <div className={`${dafaultClasses} ${props.className}`}>
      <p className="text-sm">Todos os direitos reservados</p>
    </div>
  );
}