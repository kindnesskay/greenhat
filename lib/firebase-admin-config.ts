import * as admin from "firebase-admin";
import serviceAccountJson from "../smartfunds-service-account.json";
const serviceAccount = serviceAccountJson as admin.ServiceAccount;
const firebaseAdminConfig = {
  credential: admin.credential.cert(serviceAccount),
};
const firebaseAdmin =
  admin.apps.length == 0
    ? admin.initializeApp(firebaseAdminConfig)
    : admin.apps[0];
export default firebaseAdmin;
