import NextAuth from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";

const handler = NextAuth({
    providers : [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: {label: 'Username', type:'text', placeholder:'example@.com'},
                password: {label: 'Password', type:'text', placeholder:'12345'}
            },
            async authorize(credentials : any) {
                const username = credentials.username;
                const password = credentials.password;
                console.log(credentials);
                // validation
                return {
                    id: "user1", // user.id
                    name: "Zaid", // user.name
                    username: "zaid@example.com" // user.username
                };
            },
        })
    ],
    secret:process.env.NEXTAUTH_SECRET
});

export const GET = handler;
export const POST = handler;
