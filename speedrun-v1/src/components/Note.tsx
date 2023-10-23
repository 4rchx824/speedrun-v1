"use client";
import React from "react";
import Note from "@/types/Note";

const Note = ({ note }: { note: Note }) => {
  return (
    <div className="flex flex-col border p-4 rounded-lg shadow-lg">
      <h1 className="w-full font-bold">{note.title}</h1>
      <p className="text-sm text-gray-600">{note.description}</p>
    </div>
  );
};

export default Note;
