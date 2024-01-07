import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { client_auth } from "@/lib/firebase-config";

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const userCred = await signInWithPopup(client_auth, provider);
  const idToken = await userCred.user.getIdToken();
  try {
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
    });

    if (response.ok) return true;
  } catch (error) {
    console.log(error);

    return false;
  }
}
