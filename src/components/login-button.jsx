import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from 'react'

export default function Component() {
    const { data: session } = useSession()

    useEffect(() => {
        if (session?.error === 'RefreshAccessTokenError') {
            signIn() // Force sign in to hopefully resolve error
        }
    }, [session])

    if (session) {
        return (
            <>
                Status: Logged in as { session.user.id } <br />
                <button onClick={() => signOut()}>Log out</button>
            </>
        )
    }
    return (
        <>
            Status: Not logged in <br />
            <button onClick={() => signIn()}>Log in</button>
        </>
    )
}
