'use client'

import Button from "../Button";

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
        <div>
          {solution.tittle}
        </div>

        <div>
          {solution.description}
        </div>

        <div>
          <div>
            <a>R$ {solution.value}</a> Quantia necessária para esta solução
          </div>

          <div>
            <a>{solution.numVotes}</a>
            {
              solution.voted ? 
              <Button iconLeft="fluent:star-24-filled">Votado</Button> :
              <Button variant="secondary" iconLeft="fluent:star-24-filled">Vote nesta solução</Button>
            }
          </div>
        </div>
      </div>
    );
}