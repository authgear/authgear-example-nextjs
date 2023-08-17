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
            wellKnown: `${process.env.AUTHGEAR_ISSUER}/.well-known/openid-configuration/`,
            profile(profile) {
              return {
                id: profile.sub,
                name: profile.name,
                email: profile.email,
              }
            },
          }
    ],
}

export default NextAuth(authOptions)