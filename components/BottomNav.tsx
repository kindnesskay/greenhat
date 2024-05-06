import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "home", icon: "assets/home.svg", route: "/app" },
  { name: "create", icon: "assets/create.svg", route: "/create" },
  { name: "entries", icon: "assets/edit.svg", route: "/entries" },
  { name: "menu", icon: "assets/menu.svg", route: "#" },
];
export default function BottomNav() {
  return (
    <div className="h-16 w-full fixed bottom-0 z-10  flex justify-between px-2 max-w-lg  bg-slate-100">
      {links.map((link) => (
        <Link href={link.route} key={link.name}>
          <div className="w-12 h-10 text-center text-sm font-medium hover:cursor-pointer ">
            <Image
              src={link.icon}
              alt={link.name + "-icon"}
              width={50}
              height={50}
              className="h-auto w-full border-slate-400 hover:border-2 border-solid rounded-lg"
            />
            <p>{link.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
