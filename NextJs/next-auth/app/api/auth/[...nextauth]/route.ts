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
                const user = await prisma.user.findOne({
                    where: {
                        username: username,
                        password: password
                    }
                })
                if(!user) {
                    return null;
                }

                return {
                    id: user.id,
                    username: user.username
                };
            },
        })
    ],
});

export const GET = handler;
export const POST = handler;
