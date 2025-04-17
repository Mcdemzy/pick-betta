// app/page.tsx
"use client";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>PickBetta – Coming Soon</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] px-6 text-white text-center">
        <div className="max-w-md w-full">
          <h1 className="text-4xl font-bold mb-4">
            🚧 PickBetta is Under Construction
          </h1>
          <p className="text-lg mb-6">
            We're working hard behind the scenes to bring you something great.
            Stay in the loop!
          </p>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md bg-[#1A1A1A] border border-gray-600 text-white placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="bg-[#D8A428] text-black font-semibold py-3 rounded-md hover:bg-yellow-500 transition"
            >
              Notify Me
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-400">
            Contact:{" "}
            <a href="mailto:PickBetta312@gmail.com" className="underline">
              PickBetta312@gmail.com
            </a>
          </p>

          <p className="mt-2 text-sm text-gray-400">
            © {new Date().getFullYear()} PickBetta
          </p>
        </div>
      </main>
    </>
  );
}
