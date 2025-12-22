/* import { handlers } from "@/auth";
export const {GET, POST} = handlers;
 */

/* import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "email",
                    placeholder: "user@something.com",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "password",
                },
            },
            async authorize() {
                return null;
            },
        }),
    ],
});

export { handler as GET, handler as POST }; */

import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers