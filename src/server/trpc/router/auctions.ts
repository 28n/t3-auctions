import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const auctionsRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.auction.findMany({
      orderBy: [
        {
          id: "desc",
        },
      ],
    });
  }),
  getInfo: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input, ctx }) => {
      return ctx.prisma.auction.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  bet: publicProcedure
    .input(z.object({ bet: z.number(), id: z.number() }))
    .mutation(async ({ input, ctx }) => {
      return await ctx.prisma.auction.update({
        where: {
          id: input.id,
        },
        data: {
          bet: input.bet,
        },
      });
    }),
});
