"use client";
import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, provider } from "@/lib/firebase-config";
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter();
  useEffect(() => {
    getRedirectResult(auth).then(async (userCred) => {
      if (!userCred) {
        return;
      }

      fetch("/api/auth", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await userCred.user.getIdToken()}`,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            router.push("/dashboard");
          }
        })

        .catch((error) => {
          console.error(error);
        });
    });
  }, []);

  function handleSignIn() {
    signInWithRedirect(auth, provider);
  }
  return (
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
  );
}
