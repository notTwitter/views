import { NextResponse, NextRequest } from "next/server";

export async function middleware(req, ev) {
  const { pathname, origin } = req.nextUrl;
  if (pathname == "/") {
    
    //Checking 

    //NextJS middleware does not support relative URLs, so the origin URL must be infered.
    return NextResponse.redirect(`${origin}/home`);
  }
  return NextResponse.next();
}
