import { client_auth } from "@/lib/firebase-config";
import {
  GoogleAuthProvider,
  getAdditionalUserInfo,
  getAuth,
  signInWithPopup,
} from "firebase/auth";

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const auth = client_auth
  signInWithPopup(auth, provider).then(async (result) => {
    
    const idToken = result.user.getIdTokenResult()
    const isNewUser = getAdditionalUserInfo(result)?.isNewUser;
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
    });
    if (response.ok) return true;
  });
  return false;
}
