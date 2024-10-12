import TextAppear from "../components/TextAppear";

export default function Page2() {
  return (
    <main className="relative w-screen h-screen text-normal ">
      <section className="flex flex-col gap-4 ml-8 items-center w-full h-full">
      <div className="lg:absolute lg:right-8">
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
