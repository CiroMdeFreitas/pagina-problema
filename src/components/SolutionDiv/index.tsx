'use client'

type SolutionDTO = {
    tittle: string,
    description: string;
    value: number;
    numVotes: number;
    voted?: boolean;
}

type SolutionProps = {
  solution: SolutionDTO
} & React.HTMLAttributes<HTMLDivElement>

export default function SolutionDiv({ solution, ...props}: SolutionProps) {
  const dafaultClasses = '';

  return (
      <div {...props} className={`${dafaultClasses} ${props.className}`}>
        
      </div>
    );
}