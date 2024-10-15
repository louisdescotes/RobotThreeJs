import React from 'react';

export default function Footer() {
  return (
    <main className="relative w-screen h-[30svh] text-normal bg-gradient-to-b from-black to-[#2663EB]">
      <section className="flex flex-col gap-8 justify-end items-start w-full h-full ml-40 pb-20">
        <aside>
          <p className="text-2xl">Sparky.</p>
          <p className="text-xs">Evolve yourself.</p>
        </aside>
        <nav className="flex flex-col gap-1 text-[#D9D9D]">
          <a href="#">Index</a>
          <a href="#">What he does</a>
          <a href="#">Interface</a>
          <a href="#">Contact</a>
        </nav>
      </section>
    </main>
  );
}
