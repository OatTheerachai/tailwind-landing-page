import React from "react";

const Items = () => {
  return (
    <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <svg
        class="mb-2 w-10 h-10 text-gray-500 dark:text-gray-400 t--flex items-center"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
          clip-rule="evenodd"
        ></path>
        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
      </svg>
      <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Need a help in Claim?
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Go to this step by step guideline process on how to certify for your
        weekly benefits:
      </p>
    </div>
  );
};

export default Items;
