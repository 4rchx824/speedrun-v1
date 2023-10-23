import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import Notes from "./notes";
import type Note from "@/types/Note";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { data: notes } = api.note.noteslist.useQuery() as { data: Note[] };
  const handleCreateNotePage = () => {
    router.push('/create_notes');
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-start">
        <div className="w-full max-w-3xl border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
            <div className="ml-4 mt-4 flex w-full flex-col">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Notes
              </h3>
              <button
                onClick={handleCreateNotePage}
                className="p-4 mb-4 rounded-full bg-blue-500 text-white fixed bottom-4 right-4 shadow-lg">
                +
              </button>
            </div>
          </div>
        </div>

        <Notes notes={notes} />
      </div>
    </>
  );
}
