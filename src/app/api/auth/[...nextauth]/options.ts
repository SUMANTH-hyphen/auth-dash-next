import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";

export const options : NextAuthOptions = {
    pages : {
        // signOut: '/signout',
        signIn: '/login'
    },
    providers : [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Enter username"
                },
                password:{
                    label: "Password:",
                    type: "password",
                    placeholder: "Enter password"
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = { id: "1969", name: "John Wick", password: "BabaYaga" }

                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user
                }
                else{
                    return null
                }
            }
        })
    ],
}
