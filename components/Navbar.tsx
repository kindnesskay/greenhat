import Image from "next/image";
export default function NavBar() {
  return (
    <header className=" w-full fixed z-10 max-w-lg">
      <nav className="h-12 w-full flex items-center mt-4">
        <button className="h-10 w-10 ">
          <Image
            src={"/assets/back.png"}
            alt="back-icon"
            width={50}
            height={50}
            className="h-full w-full"
          />
        </button>
      </nav>
    </header>
  );
}
