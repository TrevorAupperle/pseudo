import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    DOMAIN: z.string(),
    CLIENT_ID: z.string(),
    CLIENT_SECRET: z.string(),
    BASE_URL: z.string(),
    ISSUER_BASE_URL: z.string(),
    SECRET: z.string(),
    API_PORT: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
    CLIENT_SECRET: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    ISSUER_BASE_URL: process.env.NEXT_PUBLIC_ISSUER_BASE_URL,
    SECRET: process.env.NEXT_PUBLIC_SECRET,
    API_PORT: process.env.NEXT_PUBLIC_API_PORT,

    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
