import Login from "@/components/Login";
import { getCurrentUser } from "@/lib/firebase/helpers";
import { redirect } from "next/navigation";

export default async function page() {
  const user = await getCurrentUser();
  if (user) {
    redirect("/dashboard");
  }
  return (
    <>
      <Login />
    </>
  );
}
