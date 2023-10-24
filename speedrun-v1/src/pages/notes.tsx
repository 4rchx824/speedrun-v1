import type Note from "@/types/Note";
import React, { useState, useEffect } from "react";
import { default as NoteViewer } from "@/components/Note";

const Notes = ({ notes }: { notes: Note[] }) => {
  const [localNotes, setLocalNotes] = useState<Note[] | null>(null);  
  const [isLoading, setIsLoading] = useState<boolean>(true);  

  useEffect(() => {
    if (notes) {
      setLocalNotes(notes);
      setIsLoading(false);  
    }
  }, [notes]);

  const handleDeleteNote = (id: number) => {
    setLocalNotes(prevNotes => prevNotes ? prevNotes.filter(note => note.id !== id) : null);
  };

  if (isLoading) {
    return <div>Loading...</div>;  // Display a loading message
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-8 pt-12 max-w-7xl w-full">
        {(localNotes ?? []).map((n) => (
          <NoteViewer note={n} key={n.id} onDelete={() => handleDeleteNote(n.id)} />
        ))}
      </div>
    </>
  );
};

export default Notes;
