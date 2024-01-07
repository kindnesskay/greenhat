import { cookies } from "next/headers";
import { auth } from "../firebase-admin-config";


async function getSession() {
  try {
    return cookies().get("_session")?.value;
  } catch (error) {
    return undefined;
  }
}

const getAuthenticatedUser = async (
  session: string | undefined = undefined
) => {
  if (!session) return undefined;
  try {
    const revoked = await auth
      .verifySessionCookie(session, true)
      .then((decodedClaims) => {
        return decodedClaims;
      });
    return revoked;
  } catch (error) {
    return undefined;
  }
};

export const getCurrentUser = async () => {
  const session = await getSession();
  try {
    if (!(await getAuthenticatedUser(session))) {
      return undefined;
    }
    const decodedIdToken = await auth.verifySessionCookie(session!);
    const currenUser = await auth.getUser(decodedIdToken.uid);
    return currenUser
  } catch (error) {
    return undefined;
  }
};

export const revokAllSessions = async (sessionn: string) => {
  if (!sessionn) return undefined;
  const decodedIdToken = await auth.verifySessionCookie(sessionn);
  return auth.revokeRefreshTokens(decodedIdToken.sub);
};

