// app/api/auth/[auth0]/route.js
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
    async login(req, res) {
      await handleLogin(req, res, {
        authorizationParams: {
          prompt: "login",
        },
        returnTo: "/profile"
      });
    },
  });
