import React from "react";

export default function Action() {
  return (
    <main id="whatwedo" className="relative w-screen h-screen text-normal bg-black">
      <section className="flex flex-col gap-4 justify-center items-start w-full h-full max-w-[40rem] lg:ml-40 m-auto ">
        <h1 className="lg:text-7xl text-5xl ml-8 lg:text-left">Stop trusting in chance</h1>
        <p className="lg:text-m text-sm ml-8 w-10/12 opacity-80">
          With Sparky.
          <span className="opacity-100"> Analyse</span> the future to <span className="opacity-100">anticipate trends/events</span>. 
          <span className="opacity-100"> Analyse</span> the past to <span className="opacity-100">learn from your mistakes</span>. 
          <span className="opacity-100"> Analyse</span> the present by <span className="opacity-100">processing and integrating</span> 
          both the past and future possibilities to <span className="opacity-100">make decisions</span>.
        </p>
        <button className="my-2 ml-8 bg-blue-600 rounded-lg text-normal px-12 py-2">
         Try it !
        </button>
      </section>
    </main>
  );
}
