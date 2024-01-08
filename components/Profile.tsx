import greetCustomer from "../lib/tools/GreetClient";
import Image from "next/image";
const greeting = greetCustomer();
export default function Profile({
  photoUrl,
  name,
}: {
  photoUrl: string | undefined;
  name: string | undefined;
}) {
  return (
    <div className="flex gap-2 p-1 items-center">
      {photoUrl && (
        <Image
          className="rounded-full  border-2 border-gray-200 shadow-md"
          src={photoUrl}
          alt="Profile Picture"
          height={48}
          width={48}
        />
      )}
      <div className=" px-1 font-mono">
        <p className="text-gray-600">{greeting}</p>
        <h2 className="text-lg font-bold">{name}</h2>
      </div>
    </div>
  );
}
