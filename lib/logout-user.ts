import { signOut } from "firebase/auth";
import { client_auth } from "./firebase-config";

export default async function logout() {
  await signOut(client_auth);
  await fetch("http://localhost:3000/api/auth", {
    method: "DELETE",
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
}
