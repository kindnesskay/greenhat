import { collection, doc, setDoc } from "firebase/firestore";
import fetchUserData from "./fetchUserData";
import { client_auth, db } from "@/lib/firebase-config";
import { updateBalance } from "./updateBalance";
export default async function addTransaction(data: transaction) {
  const userID=client_auth?.currentUser?.uid
  if(!userID)return false
  const collectionRef = collection(db, `users/${userID}/transactions`);
  const docRef = doc(collectionRef, data.trxId);
  try {
    const userdata=await fetchUserData(userID)
    const {balance}=userdata 
    const new_balance=Number(balance)+Number(data.amount)
    await setDoc(docRef, data);
    await updateBalance(userID,new_balance)
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export type transaction = {
  trxId: string;
  amount: number;
  date: string;
  status: string;
  approved: boolean;
  type: string;
};
