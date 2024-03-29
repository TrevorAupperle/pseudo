import { type AppType } from "next/dist/shared/lib/utils";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { type AppProps } from "next/app";
import { Navbar } from "../components/Navbar";

import "~/styles/globals.css";
import React from "react";
import { Footer } from "~/components/Footer";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <main className="flex min-h-screen flex-col items-center bg-gray-100 font-main">
        <div className="flex w-full max-w-7xl flex-col gap-4">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </main>
    </UserProvider>
  );
};

export default MyApp;
