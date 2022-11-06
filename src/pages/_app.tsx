import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/navbar";
import Head from "next/head";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Auctions</title>
      </Head>
      <Navbar />
      <main className="absolute top-14 w-full p-2">
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
