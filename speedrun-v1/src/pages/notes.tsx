"use client"
import type Note from "@/types/Note";
import React from "react";
import { default as NoteViewer } from "@/components/Note";

const Notes = ({ notes }: { notes: Note[] }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-8 pt-12 max-w-7xl w-full">
        {(notes ?? []).map((n) => (
          <NoteViewer note={n} key={n.id} />
        ))}
      </div>
    </>
  );
};

export default Notes;
