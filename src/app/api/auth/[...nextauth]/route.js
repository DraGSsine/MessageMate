import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

if (!process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || !process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET) {
  throw new Error("NEXT_PUBLIC_GOOGLE_CLIENT_ID is not set");
}

export const authOptions = {
  secret: "12423760",
  providers: [
    GoogleProvider({
      clientId:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
};
export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };