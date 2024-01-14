import Dashboard from "@/components/Dashboard";
import LoadingScreen from "@/components/Loader";
import { getCurrentUser } from "@/lib/firebase/helpers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

interface props {
  userData: {
    uid: string | undefined;
    email: string | undefined;
    emailVerified: boolean | undefined;
    displayName: string | undefined;
    photoURL: string | undefined;
    phoneNumber: string | undefined;
  };
}
export default async function page() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/auth/login");
  }

  const userData = {
    uid: user.uid,
    email: user.email,
    emailVerified: user.emailVerified,
    displayName: user.displayName,
    photoURL: user.photoURL,
    phoneNumber: user.phoneNumber,
  };
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Dashboard currentUser={userData} />
    </Suspense>
  );
}
