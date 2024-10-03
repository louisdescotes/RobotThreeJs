import React from 'react'

export default function Landing() {
  return (
    <main className="absolute w-screen h-screen text-white">
      <section className="flex flex-col gap-4 justify-center items-center w-full h-3/5">
        <h1 className="text-7xl text-center">Trust zebzebzeb <br /> to help you</h1>
        <p className="text-m text-center">Smart, efficient, are ready to <br /> transform your workflow</p>
        <button className="my-2 bg-blue-600 rounded-lg text-white px-12 py-2">Start now !</button>
      </section>
    </main>
  )
}
