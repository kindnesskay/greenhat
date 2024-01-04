import firebaseAdmin from "@/lib/firebase-admin-config";
import { invalidateLogin } from "@/lib/invalidateLogin";
import { SessionCookieOptions } from "firebase-admin/auth";
import {
  CookieListItem,
  ResponseCookie,
} from "next/dist/compiled/@edge-runtime/cookies";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = cookies().get("session")?.value || "";
  // validate is the cookie exist in the request
  if (!session) {
    return NextResponse.json({ IsLogged: false }, { status: 401 });
  }

  // use firebase Admin to validate the session cookie
  const decodedClaims = await firebaseAdmin
    ?.auth()
    .verifySessionCookie(session, true);
  if (!decodedClaims) {
    return NextResponse.json({ IsLogged: false }, { status: 401 });
  }
  return NextResponse.json({ IsLogged: true }, { status: 200 });
}

export async function POST(request: NextRequest, response: NextResponse) {
  const authorization = headers().get("Authorization");

  const idToken = authorization?.split("Bearer")[1].trim();

  try {
    if (!idToken) {
      return NextResponse.json(
        { message: "Missing ID token" },
        { status: 400 }
      );
    }

    const decodedToken = await firebaseAdmin?.auth().verifyIdToken(idToken);
    if (decodedToken) {
      // Generate session cookie
      const expiresIn = 60 * 60 * 24 * 5 * 1000;
      const sessionCookie =
        (await firebaseAdmin?.auth().createSessionCookie(idToken, {
          expiresIn,
        })) || "";

      // Add the cookie to the browser
      const options = {
        maxAge: expiresIn,
        httpOnly: true,
        secure: true,
      };
      await firebaseAdmin
        ?.auth()
        .createSessionCookie(idToken, { expiresIn })
        .then((sessionCookie) => {
          
          
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
  // const token = cookies().get("session")?.value || "";
  

  // if (!token) {
  //   return NextResponse.json({ isLogged: false }, { status: 200 });
  // }
  // await invalidateLogin(token);
  return NextResponse.json({},{status:200});
}
