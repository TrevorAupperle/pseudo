import Link from "next/link";

export const SignupButton = () => {
  return (
    <Link className="button__sign-up" href="/api/auth/signup">
      Sign Up
    </Link>
  );
};
