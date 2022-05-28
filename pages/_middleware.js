import { NextResponse, NextRequest } from "next/server";

export async function middleware(req, ev) {
  const { pathname, origin } = req.nextUrl;
  if (pathname == "/home") {
    //Checking the user's session
    console.log("========");
    let sessionCookie = req.cookies["connect.sid"];
    console.log(req.cookies)
    fetch("http://localhost:80/test/checkAuth", {headers:{ cookie: `${sessionCookie}` }})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
        if(data.isLoggedIn) 
          {console.log("Logged in"); NextResponse.next()}
          else{console.log("Not Logged in!"); NextResponse.redirect(`${origin}/`)}
      });

    //NextJS middleware does not support relative URLs, so the origin URL must be infered.
  }
  return NextResponse.next();
}
