import { db } from "@/lib/firebase-config";
import { doc, setDoc } from "firebase/firestore";
type userData = {
  userID: string;
  firstname: string;
  lastname: string;
  username: string;
  transactions: String;
  join_date:Date
};
const addUserToDb = async (data: userData) => {
  try {
    const docRef = doc(db, "users", data.userID);
    await setDoc(docRef, data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
