import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request:NextRequest,response:NextResponse) {
    const session=request.cookies.get('session')
    // return to login if no session
    if(!session){
        return NextResponse.redirect(new URL('/login',request.url))

    }

    // call the authentication endpoint
    const responseAPI=await fetch (`${request.nextUrl.origin}/api/auth`,{
        headers:{
            Cookie:`session=${session?.value}`
        },
        
    })
// return to login if token is not authorized
if(responseAPI.status!==200){
    return NextResponse.redirect(new URL("/login",request.url))
}

return NextResponse.next()
    
}
export const config={
    matcher:["/dashboard/:path*"]
}