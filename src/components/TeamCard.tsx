import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardContent, Card } from "@/components/ui/card";
interface Props {
  image: string;
  name: string;
  role: string;
  description: string;
}

const TeamCard = ({ image, name, description, role }: Props) => {
  return (
    <Card className="w-[250px] xs:w-[350px] bg-[#151e26] text-white rounded-lg">
      <CardContent>
        <div className="flex items-center space-x-4 p-4">
          <Avatar>
            <AvatarImage alt="Zoey Lang" src={image} />
            <AvatarFallback>ZL</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-start">
            <span className="font-bold">{name}</span>
            <span className="text-sm opacity-70">@{role}</span>
          </div>
        </div>
        <div className="px-4 pb-4 text-start">
          <p className="text-sm mb-2">{description}</p>
          <p className="text-sm mb-4">#PhoenixRise</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
