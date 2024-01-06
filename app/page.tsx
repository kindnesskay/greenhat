import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="">
        <h1 className="text-center mb-4">Welcom</h1>
        <Link href={'/auth/login'} className="p-2 px-4 bg-sky-300 rounded-md">Get Started</Link>
      </section>
    </main>
  );
}
