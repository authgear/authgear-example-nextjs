# Add authentication for Next.js app using Authgear and OpenID Connect

This repo demonstrates how to integrate [Authgear](https://www.authgear.com/) with [Next.js App](https://next-auth.js.org/), and [NextAuth.js](https://next-auth.js.org/) client library is used for sending authentication requests as an OpenID Connect middleware from the app to Authgear.

## What is Authgear?

[Authgear](https://www.authgear.com/) acts as an IAM provider that is a **gatekeeper to the resources** you provide to customers as web and mobile applications, APIs, etc. The gatekeeper initiates authorization as outlined in [OAuth 2.0](https://www.notion.so/concepts/identity-fundamentals#oauth-2.0). The addition of the [OpenID Connect](https://www.notion.so/concepts/identity-fundamentals#open-id-connect) layer adds authentication to secure your users’ digital identities and your product.

## How to run the project

## Prerequisites

Before you begin, you'll need the following:

- A **free Authgear account**. [Sign up](https://oursky.typeform.com/to/S5lvI8rN) if you don't have one already.
- [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
- Experience with [Next.js](https://nextjs.org/) framework and application development.

Start by cloning the project into your local machine:

```bash
git clone 
```

Make the project directory your current working directory:

```bash
cd authgear-example-nextjs
```

In the root directory of your project, add the file `.env.local` with the following environment variables:

```jsx
AUTHGEAR_ISSUER={your-authgear-app-endpoint}
AUTHGEAR_CLIENT_ID={your-client-id}
AUTHGEAR_CLIENT_SECRET={your-client-secret}
```

Replace with Authgear app settings values from **Part1** such as `Issuer`, `ClientId`, `ClientSecret`.

Start the HTTP server by running the following command.

```bash
npm run dev
```

Browse to [localhost:3000](http://localhost:3000/). If the installation went successful, you should see the Login page.