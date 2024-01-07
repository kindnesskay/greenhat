"use client";
import { useRouter } from "next/navigation";
import { signInWithGoogle } from "@/lib/firebase/auth/helpers";
import { useState } from "react";
import LoadingScreen from "@/components/Loader";

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
        <section className="h-full w-full flex justify-center items-center">
          <div className="w-fit p-4">
            <h2 className="text-2xl text-center uppercase mb-2">Login page</h2>
            <button
              className="p-4 rounded-lg bg-sky-200"
              onClick={() => handleSignIn()}
            >
              Sign In With Google
            </button>
          </div>
        </section>
      )}
    </>
  );
}
