import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
 
const privetRouts = ["/about","/food-details"]
const adminRouts = ["/dashboard"]
// This function can be marked `async` if using `await` inside
export async function proxy(req) {
  const token = await getToken({req})
  const reqUrl = req.nextUrl.pathname;
  const isUser = token?.role ==="user"
  const isAdmin = token?.role ==="admin"
  const isPrivetRoute = privetRouts.some(r=>reqUrl.startsWith(r))
  const isAdminRoute = adminRouts.some(r=>reqUrl.startsWith(r))
  const isLogin = Boolean(token)
  const url = new URL('/api/auth/signin', req.url)
 if(!isLogin){
  url.searchParams.set('callbackUrl',reqUrl)
   return NextResponse.redirect(url)
 }
 if(isAdminRoute && !isAdmin){
  return NextResponse.redirect(new URL('/forbidden', req.url))
 }
 if(isPrivetRoute && !isLogin)
 {
  url.searchParams.set('callbackUrl',reqUrl)
   return NextResponse.redirect(url)
 }
}
export const config = {
  matcher: ['/reviews/:path*','/dashboard/:path*',"/about/:path*","/food-details/:path*"],
}