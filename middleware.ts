import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const config = {
  matcher: [
    "/messages/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/users/:path*",
  ],
};
