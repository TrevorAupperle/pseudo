import { type AppType } from "next/dist/shared/lib/utils";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { AppProps } from "next/app";
import { Navbar } from "~/components/Navbar";

import "~/styles/globals.css";
import React from "react";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <main className="font-main flex min-h-screen flex-col items-center bg-gray-100">
      <div className="flex w-full max-w-7xl flex-col gap-4">
        <Navbar />
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </div>
    </main>
  );
};

export default MyApp;
