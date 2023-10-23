import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { db } from "@/server/db";
export const noteRouter = createTRPCRouter({
  noteslist: publicProcedure.query(async () => {
    const notes = await db.notes.findMany();
    return notes;
  }),
  notesCreate: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    )
    .query(async (opts) => {
      const { input } = opts;
      const newNote = await db.notes.create({
        data: {
          title: input.title,
          description: input.description,
        },
      });
    }),
});
