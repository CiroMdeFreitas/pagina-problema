'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import problem_image from "@/assets/mock_images/problem_image.png";
import profile from "@/assets/mock_images/profile.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import SolutionDiv from "@/components/SolutionDiv";
import { v4 as uuidv4 } from 'uuid';
import CardDiv from "@/components/CardDiv";
import CommentDiv from "@/components/CommentDiv";

// DTOs
type ProblemDTO = {
  tittle: string;
  image: {
    source: typeof problem_image,
    alternativeText?: string,
  };
  address: {
    neighborhood: string,
    city: string,
    estate: string,
  },
  description: string,
  solutions: SolutionDTO[],
  comments: CommentDTO[];
}

type SolutionDTO = {
  tittle: string,
  description: string;
  value: string;
  numVotes: number;
  voted?: boolean;
}

type CommentDTO = {
  profile: typeof profile;
  username: string;
  comment: string;
}

export default function Home() {
  // Fake problem
  const problem = {
    tittle: "Título do Problema",
    image: {
      source: problem_image,
    },
    address: {
      neighborhood: "Bairro",
      city: "Cidade",
      estate: "UF",
    },
    description: "Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos. Est fuga alias non neque sapiente et sint nemo qui labore fugit et quia quos id dicta adipisci. Sed perspiciatis amet qui doloribus voluptatem in eaque unde quo minima iste in odit quaerat id aliquam vitae eos reprehenderit aliquid. Et ipsum odio eos possimus saepe ex eligendi rerum ea dignissimos dicta sed atque suscipit aut architecto sequi.",
    solutions: [
      {
        tittle: "Título solução",
        description: "Et fugiat laudantium et voluptates eius ea omnis fuga. Ea reiciendis expedita sit ducimus dolore hic ducimus galisum aut assumenda veritatis nam tempore iure est provident soluta ad repellat porro. Aut harum sequi cum consequatur dignissimos aut Quis quis aut minus recusandae aut ratione natus quo ipsam nesciunt. A quos minima et ipsam consequatur ut sint omnis ut eius praesentium non veritatis libero et possimus unde non quia animi.",
        value: "1.000",
        numVotes: 9,
        voted: true,
      },
      {
        tittle: "Título solução",
        description: "Lorem ipsum dolor sit amet. Eum galisum atque sit ullam dicta non placeat neque et autem incidunt. Hic nemo assumenda id internos corrupti non doloremque illo rem quaerat voluptatem vel commodi possimus sed quisquam voluptas. Aut odit voluptatem et repudiandae voluptas nam dolor laborum qui earum omnis.",
        value: "1.000",
        numVotes: 5,
      },
    ],
    comments: [
      {
        profile: profile,
        username: "Nome Sobrenome",
        comment: "Lorem ipsum dolor sit amet.",
      },
      {
        profile: profile,
        username: "Nome Sobrenome",
        comment: "Et inventore rerum ab reprehenderit autem ut omnis pariatur! 33 rerum quia sit neque dolorum et neque repellat qui sapiente eius!",
      },
      {
        profile: profile,
        username: "Nome Sobrenome",
        comment: "Et inventore rerum ab reprehenderit autem ut omnis pariatur! 33 rerum quia sit neque dolorum et neque repellat qui sapiente eius!",
      },
      {
        profile: profile,
        username: "Nome Sobrenome",
        comment: "Lorem ipsum dolor sit amet.",
      },
    ],
  } as ProblemDTO;

  return (
    <main>
      <Header />

      <div className="grid grid-cols-2 gap-8 px-[56px] py-[56px]">
        <div>
          <div className="text-center text-[56px] font-extrabold leading-[normal]">
            {problem.tittle}
          </div>
          
          <div className="py-[38px]">
            <div>
              <Image className="py-[10px]" width={860} height={484} src={problem.image.source} alt={problem.image.alternativeText ? problem.image.alternativeText : "Imagem do problema."} />

              <div className="py-[14px] flex items-center">
              <Icon icon="fluent:location-28-filled" className="w-[14px] h-[14px]"/>
              {problem.address.neighborhood}, {problem.address.city} - {problem.address.estate}
            </div>

            <p>{problem.description}</p>

            <div className="gap-2 py-[32px]">
              <CardDiv variant="gray">
                <input className="w-[100%] bg-transparent placeholder-black placeholder:font-bold" type="text" placeholder="Adicione o título..." />
                <input className="w-[100%] bg-transparent placeholder-black" type="text" placeholder="Descreva a sua solução..." />
              </CardDiv>

              {
                problem.solutions.map((solution) => {
                   return <SolutionDiv key={uuidv4()} solution={solution} />
                })
              }
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center text-[32px] font-extrabold leading-[normal]">
            Discussão
          </div>

          <div className="py=[16px]">*Você pode votar até às 23h59 do dia 00/00/0000</div>

          <div className="block space-y-2 py-[32px]">
            <CardDiv variant="gray" className="flex justify-between items-center">
              <Image className="py-[10px]" width={50} height={50} src={problem.comments[0].profile} alt={"Foto de perfil de " + problem.comments[0].username + "."} />
              <div className="px-[16px] py-[16px] grow">
                <input className="w-[100%] bg-transparent placeholder-black" type="text" placeholder="Adicione um comentário..." />
              </div>
            </CardDiv>

            {
              problem.comments.map((comment) => {
                return <CommentDiv key={uuidv4()} comment={comment} />
              })
            }
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
