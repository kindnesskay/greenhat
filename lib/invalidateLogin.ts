import { cookies } from "next/headers";
import firebaseAdmin from "./firebase-admin-config";

export const invalidateLogin = async (token: string) => {
  const decodedClaims = await firebaseAdmin
    ?.auth()
    .verifySessionCookie(token, true);
  if (!decodedClaims) {
    return false;
  }
  await firebaseAdmin?.auth().revokeRefreshTokens(decodedClaims.uid);
  cookies().delete("session");
  return true;
};
