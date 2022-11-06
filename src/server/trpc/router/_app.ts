import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { auctionsRouter } from "./auctions";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  auctions: auctionsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
