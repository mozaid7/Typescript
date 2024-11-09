import NextAuth from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";

const handler = NextAuth({
    providers : [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: {label: 'Username', type:'text', placeholder:'example@.com'},
                password: {label: 'Password', type:'password', placeholder:'12345'}
            },
            async authorize(credentials : any) {
                // const username = credentials.username;
                // const password = credentials.password;
                console.log(credentials);
                // validation
                return {
                    id: "1", // user.id
                    name: "Zaid", // user.name
                    email: "zaid@example.com" // user.username
                };
            },
        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks : {
        // jwt: ({token,user}) => {
        //   token.userId = token.sub;
        //   console.log(token);
        //    return token
        // },
        // session callback is more efficient than jwt callback
        
        session: ({session, token, user}: any) => {
            console.log(session);
            if (session && session.user) {
                session.user.id = token.sub;
            }
            return session;
        }
    }
});

export const GET = handler;
export const POST = handler;
