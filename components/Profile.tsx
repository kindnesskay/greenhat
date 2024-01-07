import Image from "next/image";

export default function Profile({
  photoUrl,
  name,
}: {
  photoUrl: string |undefined,
  name: string| undefined
}) {
  return (
    <div className="flex gap-2 p-2 items-center">
      {photoUrl && (
        <Image
          className="rounded-full  border-2 border-gray-200 shadow-md"
          src={photoUrl}
          alt="Profile Picture"
          height={48}
          width={48}
        />
      )}
      <h2 className="text-xl font-bold mb-2">{name}</h2>
    </div>
  );
}
