import Head from 'next/head'
import LoginButton from '@/components/login-button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js + Authgear</title>
        <meta name="description" content="Sample app to demonstrate implementing authentication in a Next.js application with Authgear" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LoginButton />
      </main>
    </>
  )
}
