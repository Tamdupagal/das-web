import nextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            authorize(credentials, req) {
                const { email, password } = credentials;
                //perform other logics
                //find users from DB
                if (email !== "admin@digitalaidedschool.com" || password !== "DAS@admin123") {
                    throw new Error('invalid credentials')
                    return null
                }

                //if all fine return
                return { "id": "201", "name": "Admin", "email": "admin@digitalaidedschool.com" }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
}

export default nextAuth(authOptions)