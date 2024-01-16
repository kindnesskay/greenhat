import { db } from "@/lib/firebase-config";
import {  doc, getDoc } from "firebase/firestore";

const fetchUserData = async (userId: string) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (error) {
    console.log(error);
    return false
    
  }
};

export default fetchUserData;
