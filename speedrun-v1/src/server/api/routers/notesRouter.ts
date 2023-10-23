import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { db } from "@/server/db";
const handleError = (error: Error, message: string) => {
  // Log the error for debugging
  console.error(error);

  // Here you can add more complex logic, like sending the error to an error-tracking service

  throw new Error(`${message}: ${error.message}`);
};

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
    .mutation(async (opts) => {
      try {
        const { input } = opts;
        const newNote = await db.notes.create({
          data: {
            title: input.title,
            description: input.description,
          },
        });
        return newNote;
      } catch (err) {
        handleError(err as Error, "Failed to create note");
      }
    }),
  notesUpdate: publicProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string().optional(),
        description: z.string().optional(),
      }),
    )
    .mutation(async (opts) => {
      try {
        const { input } = opts;

        const updatedNote = await db.notes.update({
          where: { id: input.id },
          data: {
            title: input.title,
            description: input.description,
          },
        });
        return updatedNote;
      } catch (err) {
        handleError(err as Error, "Failed to update note");
      }
    }),
  notesDelete: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async (opts) => {
      try {
        const { input } = opts;

        const deletedNote = await db.notes.delete({
          where: { id: input.id },
        });
        return deletedNote;
      } catch (err) {
        handleError(err as Error, "Failed to delete note");
      }
    }),
});
