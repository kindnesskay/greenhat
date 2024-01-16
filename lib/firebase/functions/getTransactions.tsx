import { db } from "@/lib/firebase-config";
import { collection, getDocs } from "firebase/firestore";

export default async function getTransactions(userID: string) {
  const collectionRef = collection(db, `users/${userID}/transactions`);
  const transactionsArray: any = [];
  try {
    const data = await getDocs(collectionRef);
    data.forEach((doc) => {
      transactionsArray.push({ ...doc.data() });
    });

    return transactionsArray;
  } catch (error) {
    console.log(error);
    return false;
  }
}
