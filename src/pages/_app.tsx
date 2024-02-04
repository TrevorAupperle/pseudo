import { type AppType } from "next/dist/shared/lib/utils";
import { Navbar } from "~/components/Navbar";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className="font-main flex min-h-screen flex-col items-center bg-gray-100">
      <div className="flex w-full max-w-7xl flex-col gap-4">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </main>
  );
};

export default MyApp;
