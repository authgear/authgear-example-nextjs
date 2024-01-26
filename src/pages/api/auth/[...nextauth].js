import NextAuth from "next-auth"

export const authOptions = {
    providers: [
        {
            id: "authgear",
            name: "Authgear",
            type: "oauth",
            issuer: process.env.AUTHGEAR_ISSUER,
            clientId: process.env.AUTHGEAR_CLIENT_ID,
            clientSecret: process.env.AUTHGEAR_CLIENT_SECRET,
            wellKnown: `${process.env.AUTHGEAR_ISSUER}/.well-known/openid-configuration`,
            authorization: { params: { scope: "openid offline_access https://authgear.com/scopes/full-userinfo" } },
            client: {
                token_endpoint_auth_method: "client_secret_post",
            },
            profile(profile) {
                return {
                    id: profile.sub,
                }
            }
        }
    ],
    callbacks: {
        async jwt({ token, account, profile }) {
            if (account) {
                token.accessToken = account.access_token

                token.id = profile.sub
                token.name = profile.name

                token.email = profile.email
                token.phone_number = profile.phone_number
            }
            return token
        },

        async session({ session, token, user }) {
            session.accessToken = token.accessToken

            session.user.id = token.id
            session.user.name = token.name

            session.user.email = token.email
            session.user.phone_number = token.phone_number

            return session
        }
    },
}

export default NextAuth(authOptions)

