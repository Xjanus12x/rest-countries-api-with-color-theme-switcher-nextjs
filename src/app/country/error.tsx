"use client";
import Link from "next/link";

type ErrorBoundaryProps = {
  error: Error;
};

export default function ErrorBoundary({ error }: ErrorBoundaryProps) {
  return (
    <section className="row-start-2 overflow-auto flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold text-red-600">Something went wrong</h1>
      <p className="text-gray-700 mt-2">
        {error.message || "An unexpected error occurred."}
      </p>
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
      >
        Back to Home
      </Link>
    </section>
  );
}
