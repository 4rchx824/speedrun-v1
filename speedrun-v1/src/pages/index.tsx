import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import Notes from "./notes";
import type Note from "@/types/Note";

export default function Home() {
  const { data: notes } = api.note.noteslist.useQuery() as { data: Note[] };
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-start">
        <div className="w-full max-w-3xl border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
            <div className="ml-4 mt-4 flex w-full flex-col">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Notes
              </h3>

              <form className="flex items-center space-x-4">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  placeholder="Title"
                />
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  placeholder="Description"
                />

                <button
                  type="button"
                  className="w-full max-w-[100px] items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create note
                </button>
              </form>
            </div>
          </div>
        </div>

        <Notes notes={notes} />
      </div>
    </>
  );
}
