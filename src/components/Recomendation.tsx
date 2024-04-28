/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yHCcQKXDaI5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center mb-4">
        <StarIcon className="h-5 w-5 text-yellow-400" />
        <StarIcon className="h-5 w-5 text-yellow-400" />
        <StarIcon className="h-5 w-5 text-yellow-400" />
        <StarIcon className="h-5 w-5 text-yellow-400" />
        <StarIcon className="h-5 w-5 text-yellow-400" />
      </div>
      <p className="text-gray-600 mb-4">
        BoostMedia helped me increase my online presence and reach a wider
        audience. Their strategies are effective and their team is highly
        knowledgeable.
      </p>
      <div className="flex items-center">
        <Avatar>
          <AvatarImage
            alt="John Doe"
            src="/placeholder.svg?height=32&width=32"
          />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <div className="ml-2">
          <p className="text-sm font-semibold">Ayoub Bensalah</p>
          <p className="text-sm text-gray-500">BoostMedia</p>
        </div>
        <DribbbleIcon className="h-6 w-6 ml-auto text-gray-800" />
      </div>
    </div>
  );
}

function DribbbleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
