import IconButton from "@/components/IconButton";
import Button from "../Button";

type HeaderProps = { } & React.HTMLAttributes<HTMLDivElement>

export default function Header({ ...props }: HeaderProps) {
  const dafaultClasses = 'bg-black-tone text-white flex h-[90px] justify-between items-center shrink-0 px-14 py-6';

  return (
    <div className={`${dafaultClasses} ${props.className}`}>
      <div className="w-[176px] h-[32px] flex items-center gap-10">
        <IconButton icon="uil:home-alt" />
        <IconButton icon="uil:comments-alt" />
        <IconButton icon="fluent:search-24-filled" />
      </div>

      <div className="w-[244px] h-[40px] flex items-center gap-4">
        <Button variant="secondary" iconRight="uil:user" className="text-sm">
          Login
        </Button>
        
        <Button iconRight="uil:plus" className="text-sm">
          Cadastrar nova ação
        </Button>
      </div>
    </div>
  );
}