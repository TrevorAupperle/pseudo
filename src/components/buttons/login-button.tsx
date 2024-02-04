import Link from "next/link";

export const LoginButton = () => {
  return (
    <Link className="button__login" href="/api/auth/login">
      Log In
    </Link>
  );
};
