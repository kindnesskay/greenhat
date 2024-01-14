import { client_auth } from "@/lib/firebase-config";
import {
  GoogleAuthProvider,
  getAdditionalUserInfo,
  signInWithPopup,
} from "firebase/auth";
import addUserToDb, { userData } from "../functions/addUser";

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const auth = client_auth;
  return signInWithPopup(auth, provider).then(async (result) => {
    const idToken = await result.user.getIdToken();
    const isNewUser = getAdditionalUserInfo(result)?.isNewUser;
    // user data
    const user = result.user;
    const data: userData = {
      name: user.displayName,
      userID: user?.uid,
      username: "",
      join_date: new Date(),
      transactions: `${user.uid}/transactions`,
    };
    if (isNewUser) {
      addUserToDb(data);
    }
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
    });
    if (response.ok) return true;
    return false;
  });
}
