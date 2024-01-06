"use client";
import logout from "@/lib/logout-user";
import { UserRecord } from "firebase-admin/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoadingScreen from "./Loader";

export default function Dashboard({
  currentUser,
}: {
  currentUser?: {
    uid: string | undefined;
    email: string | undefined;
    emailVerified: boolean | undefined;
    displayName: string | undefined;
    photoURL: string | undefined;
    phoneNumber: string | undefined;
  };
}) {
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();
  const handleSignOut = async () => {
    setIsloading(true);
    await logout();
    router.refresh();
  };
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              {currentUser?.displayName}
            </h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleSignOut}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
