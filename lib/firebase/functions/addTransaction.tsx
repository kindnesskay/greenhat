import { db } from "@/lib/firebase-config";
import { collection, doc, setDoc } from "firebase/firestore";
export default async function addTransaction(userID:string,data:object) {
    const collectionRef=collection(db,`${userID}/tarnsaction`)
    const docRef=doc(collectionRef,crypto.randomUUID())
    await setDoc(docRef,data)
  try {
    
  } catch (error) {
    console.log(error);
    
  }
}
