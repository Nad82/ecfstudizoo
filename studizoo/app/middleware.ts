import { auth } from "@/app/auth";


export default auth((req) => {
    if (!req.auth && req.nextUrl.pathname !== "/connexion") {
        const newUrl = new URL("/connexion", req.nextUrl.origin)
        return Response.redirect(newUrl)
    }
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
    }