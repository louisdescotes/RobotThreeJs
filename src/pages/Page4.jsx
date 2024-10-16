import TextAppear from "../components/TextAppear";

export default function Page4() {
  return (
    <main className="relative w-screen h-screen text-normal">
      <section className="flex flex-col gap-4 ml-8 justify-center items-center w-full h-full">
      <div className="lg:absolute lg:right-8">
        <TextAppear
          title="Opportunities"
          subtitle="Scanning the present, it identifies paths and choices, illuminating
          possibilities that arise in real-time. A keen observer, it navigates
          the landscape of decision-making, guiding toward potential futures
          waiting to be explored"
        />
        </div>
      </section>
    </main>
  );
}
