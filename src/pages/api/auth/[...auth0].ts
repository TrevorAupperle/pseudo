import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";
//import { NextApiRequest, NextApiResponse } from "next";

export default handleAuth({
  async login(req, res) {
    await handleLogin(req, res, {
      authorizationParams: {
        prompt: "login",
      },
      returnTo: "/profile",
    });
  },
});
