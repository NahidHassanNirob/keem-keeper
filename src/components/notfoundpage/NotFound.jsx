import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-9xl font-bold text-[#244D3F]">404</h1>
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Oops! Friend Not Found
        </h2>
        <p className="text-gray-500 mt-2">
          The person you are looking for is not in our list.
        </p>

        <Link
          href="/"
          className="mt-6 px-6 py-3 bg-[#244D3F] text-white rounded-md hover:bg-[#1a3a30] transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
