import { UserProvider } from "@auth0/nextjs-auth0/client";
import { AppProps } from "next/app";
// import Head from "next/head";
import "../styles/styles.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default App;
