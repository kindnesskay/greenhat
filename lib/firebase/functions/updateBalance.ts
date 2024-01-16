import { db } from "@/lib/firebase-config";
import { doc, updateDoc } from "firebase/firestore";

export async function updateBalance(userID: string, new_balance: number) {
  const docRef = doc(db, "users", userID);
  try {
    updateDoc(docRef, {
      balance: new_balance,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
