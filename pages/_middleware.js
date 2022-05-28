import { NextResponse, NextRequest } from "next/server";

export async function middleware(req, ev) {
  const { pathname, origin } = req.nextUrl;
  if (pathname == "/home") {
    
    //Checking the user's session
    console.log("========")
    let sessionCookie = req.cookies["connect.sid"];
    console.log(sessionCookie)
    fetch('http://localhost:80/test/checkAuth', {credentials: 'include'} )
    .then(res => {return res.json()})
    .then(data => console.log(data))

    //NextJS middleware does not support relative URLs, so the origin URL must be infered.
    return NextResponse.redirect(`${origin}/`);
  }
  return NextResponse.next();
}
