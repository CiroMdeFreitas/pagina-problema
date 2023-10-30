'use client'

import Button from "../Button";
import CardDiv from "../CardDiv";

type SolutionDTO = {
    tittle: string,
    description: string;
    value: string;
    numVotes: number;
    voted?: boolean;
}

type SolutionProps = {
  solution: SolutionDTO
} & React.HTMLAttributes<HTMLDivElement>

export default function SolutionDiv({ solution, ...props}: SolutionProps) {
  const dafaultClasses = '';

  return (
      <CardDiv {...props} className={`${dafaultClasses} ${props.className}`}>
        <div className="font-bold">
          {solution.tittle}
        </div>

        <div>
          {solution.description}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="font-bold">R$ {solution.value}</div> Quantia necessária para esta solução
          </div>

          <div className="flex justify-between items-center gap-5">
            <div className="flex gap-2">
              <div className="font-bold">{solution.numVotes}</div> votos
            </div>
            {
              solution.voted ? 
              <Button iconLeft="fluent:star-24-filled">Votado</Button> :
              <Button variant="secondary" iconLeft="fluent:star-24-filled">Vote nesta solução</Button>
            }
          </div>
        </div>
      </CardDiv>
    );
}