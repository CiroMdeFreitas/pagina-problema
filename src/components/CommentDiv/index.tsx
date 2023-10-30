import Image from "next/image";
import CardDiv from "../CardDiv";
import profile from "@/assets/mock_images/profile.svg";

type CommentProps = {
    comment: {
        profile: typeof profile;
        username: string;
        comment: string;
      },
 } & React.HTMLAttributes<HTMLDivElement>

export default function CommentDiv({ comment, ...props }: CommentProps) {
    const dafaultClasses = '';
  
    return (
        <div className={`${dafaultClasses} ${props.className}`}>
            <CardDiv className="flex justify-between items-center">
              <Image className="py-[10px]" width={50} height={50} src={comment.profile} alt={"Foto de perfil de " + comment.username + "."} />

              <div className="block w-[100%] px-[16px] py-[16px]">
                <div className="flex gap-2">
                    <div className="font-extrabold">
                        {comment.username}
                    </div>

                    <div>
                        Há 1 hora atrás
                    </div>
                </div>

                <div>
                    {comment.comment}
                </div>
              </div>
            </CardDiv>
        </div>
    )
}