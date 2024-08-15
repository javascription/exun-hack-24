import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.ID,
            clientSecret: process.env.SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ]
}
