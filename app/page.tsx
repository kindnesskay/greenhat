import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-screen items-center justify-between">
      <section className="w-full">
        <Hero />
      </section>
    </main>
  );
}
