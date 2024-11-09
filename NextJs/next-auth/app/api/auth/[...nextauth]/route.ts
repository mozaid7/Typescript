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
                let user; // check for DB validation whether data is present or not

                if(!user) {
                    return null;
                }

                return {
                    id: user, // user.id
                    username: user // user.username
                };
            },
        })
    ],
});

export const GET = handler;
export const POST = handler;
