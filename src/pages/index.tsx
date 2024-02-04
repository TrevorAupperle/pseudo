import { HeroBanner } from "../components/hero-banner";
import { PageLayout } from "../components/page-layout";
import { LoginButton } from "~/components/buttons/login-button";
import { SignupButton } from "~/components/buttons/signup-button";

const Home = () => (
  <PageLayout>
    <>
      <SignupButton />
      <LoginButton />
      <HeroBanner />
    </>
  </PageLayout>
);

export default Home;
