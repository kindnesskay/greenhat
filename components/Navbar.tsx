"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
function NavBar() {
  const router = useRouter();
  const path = usePathname();

  return (
    <header className=" w-full fixed z-10 max-w-lg">
      <nav className="h-12 w-full flex items-center mt-4">
        <button
          className="h-10 w-10 "
          onClick={() => router.back()}
          hidden={path == "/"}
        >
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

export default NavBar;
