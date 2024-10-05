import TextAppear from "../components/TextAppear";

export default function Page3() {
  return (
    <main className="relative w-screen h-screen text-white">
      <section className="flex flex-col gap-4 justify-center items-center w-full h-full">
        <TextAppear
          title="Remories"
          subtitle="Scanning the past, it captures fleeting moments and memories, preserving the essence of what has been. A vigilant eye, it records the tapestry of experiences, revealing the stories that shape our present."
        />
      </section>
    </main>
  );
}
