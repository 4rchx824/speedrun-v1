"use client";
import React, { useState } from "react";
import Note from "@/types/Note";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Toaster, toast } from "sonner";

const Note = ({ note }: { note: Note }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [data, setData] = useState<Note>({
    id: note.id ?? 0,
    description: note.description ?? "",
    title: note.title ?? "",
  });

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    toast.message(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Toaster />
      <div className="flex w-full max-w-sm flex-col rounded-lg border p-4 shadow-lg">
        <div className="flex items-center justify-between space-x-8">
          <input
            className="w-full cursor-text p-2 font-bold"
            name="title"
            value={data.title}
            disabled={!isEditing}
            onChange={handleDataChange}
          />
          <div className="flex items-center justify-center space-x-1">
            <PencilIcon
              className="h-4 w-4 cursor-pointer transition-all hover:text-gray-600"
              onClick={() => setIsEditing(!isEditing)}
              onFocus={(e) => toast.success("Focus!")}
            />
            <TrashIcon className="h-4 w-4 cursor-pointer transition-all hover:text-red-600" />
          </div>
        </div>
        <p className="text-sm text-gray-600">{note.description}</p>
      </div>
    </>
  );
};

export default Note;
