"use client"
import React from "react";

function Form() {
   
  return (
    <form
      action="/"
      className="flex flex-col items-center gap-5"
      onSubmit={
        (e)=>{
            e.preventDefault();
            alert('Form submitted successfully')
        }
      }>
      <input
        type="text"
        placeholder="Your name"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="email"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
      <textarea
        id="message"
        rows={4}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Leave a message..."
      ></textarea>
      <button
        type="submit"
        className="inline-flex w-52 justify-center self-start rounded-md bg-accent  px-4 py-2 text-white drop-shadow"
      >
        Send
      </button>
    </form>
  );
}

export default Form;
