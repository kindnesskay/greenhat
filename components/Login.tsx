"use client";
import { useRouter } from "next/navigation";
import { signInWithGoogle } from "@/lib/firebase/auth/helpers";
import { useState } from "react";
import LoadingScreen from "@/components/Loader";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsloading] = useState(false);

  async function handleSignIn() {
    setIsloading(true);
    const isOk = await signInWithGoogle();    
    if (isOk) {
      router.refresh();
    }
  }
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <section className="h-screen w-full flex justify-center items-center">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-bold text-center uppercase mb-8">Lets get Started</h2>
            <button
              className="font-semibold p-4 rounded-lg justify-center flex gap-4 text-md bg-white w-full border border-sold border-gray-200"
              onClick={() => handleSignIn()}
            >
              <Image alt="google logo g" src={"/assets/google.png"} height={24} width={24}/>
              Sign In With Google
            </button>
          </div>
        </section>
      )}
    </>
  );
}
