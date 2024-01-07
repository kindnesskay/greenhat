import * as admin from "firebase-admin";
import serviceAccountJson from "../smartfunds-service-account.json";
import { getAuth } from "firebase-admin/auth";
import { getApps } from "firebase-admin/app";
const serviceAccount = serviceAccountJson as admin.ServiceAccount;
const firebaseAdminConfig = {
  credential: admin.credential.cert(serviceAccount),
};
const firebaseAdmin =
  getApps().length == 0
    ? admin.initializeApp(firebaseAdminConfig)
    :getApps()[0]
export default firebaseAdmin;
export const auth =getAuth(firebaseAdmin)