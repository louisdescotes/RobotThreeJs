import React from 'react'

export default function Landing() {
  return (
    <main id='index' className="relative w-full h-screen text-normal">
      <section className="flex flex-col gap-4 justify-center items-center w-full h-3/5">
        <h1 className="text-7xl text-center">
          Trust <span className="bg-custom-gradient bg-clip-text text-transparent">Sparky</span> <br /> to help you
        </h1>
        <p className="text-m text-center">
          Smart, efficient, and ready to <br /> transform your workflow
        </p>
        <button className="my-2 bg-blue-600 rounded-lg text-normal px-12 py-2">
          Start now!
        </button>
      </section>
    </main>
  );
}
