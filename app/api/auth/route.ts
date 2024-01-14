import { auth } from "@/lib/firebase-admin-config";
import { revokAllSessions } from "@/lib/firebase/helpers";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = cookies().get("_session")?.value || "";
  // validate is the cookie exist in the request
  if (!session) {
    return NextResponse.json({ IsLogged: false }, { status: 401 });
  }

  // use firebase Admin to validate the session cookie
  const decodedClaims = await auth.verifySessionCookie(session, true);
  if (!decodedClaims) {
    return NextResponse.json({ IsLogged: false }, { status: 401 });
  }
  return NextResponse.json({ IsLogged: true }, { status: 200 });
}

export async function POST(request: NextRequest, response: NextResponse) {
  const reqBody = (await request.json()) as { idToken: string };
  const idToken = reqBody.idToken;
  
  try {
    if (!idToken) {
      return NextResponse.json(
        { message: "Missing ID token" },
        { status: 400 }
      );
    }

    const decodedToken = await auth.verifyIdToken(idToken);
    if (decodedToken) {
      // Generate session cookie
      const expiresIn = 60 * 60 * 24 * 5 * 1000;
      const sessionCookie =
        (await auth.createSessionCookie(idToken, {
          expiresIn,
        })) || "";

      // Add the cookie to the browser
      const options = {
        maxAge: expiresIn,
        httpOnly: true,
        secure: true,
      };
      // create the session cookie
      await auth
        .createSessionCookie(idToken, { expiresIn })
        .then((sessionCookie) => {
          cookies().set("_session", sessionCookie, options);
        });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Sever Error" },
      { status: 500 }
    );
  }

  return NextResponse.json({}, { status: 200 });
}

export async function DELETE(request: NextRequest, response: NextResponse) {
  const sessionCookie = cookies().get("_session")?.value || "";
  if (!sessionCookie) {
    return NextResponse.json(
      { success: false, error: "Session not found" },
      { status: 400 }
    );
  }
  cookies().delete("_session");
  await revokAllSessions(sessionCookie);

  return NextResponse.json(
    { success: true, message: "Signed out successfull" },
    { status: 200 }
  );
}
