import TextAppear from "../components/TextAppear";

export default function Page2() {
  return (
    <main className="relative right-8 w-screen h-screen text-white ">
      <section className="flex flex-col gap-4  items-center w-full h-full">
      <div className="absolute right-8">
        <TextAppear
          title="Anticipate"
          subtitle=" Scanning unseen frequencies, it detects subtle shifts and future
          possibilities. Always vigilant, it senses changes before they unfold,
          guiding through the uncertainty of what’s to come."
        />
        </div>
      </section>
    </main>
  );
}
