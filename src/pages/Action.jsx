import React from "react";

export default function Action() {
  return (
    <main className="relative w-screen h-screen text-white bg-black">
      <section className="flex flex-col gap-4 justify-center items-start w-full h-full max-w-[40rem] ml-40">
        <h1 className="text-7xl ">Stop trusting in chance</h1>
        <p className="text-m ">
          With Sparky. Analyse the future to anticipate trends/events. Analyse
          the past to learn from your mistakes. Analyse the present by
          processing and integrating both the past and future possibilities to
          make decisions.
        </p>
        <button className="my-2 bg-blue-600 rounded-lg text-white px-12 py-2">
         Try it !
        </button>
      </section>
    </main>
  );
}
