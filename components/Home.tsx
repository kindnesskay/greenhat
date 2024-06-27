import Link from "next/link";

function Home() {
  return (
    <section className="w-full flex flex-col items-center ">
      <div className="p-8 w-full flex justify-center items-center gap-4 flex-col">
        <div>
          <h1 className="text-4xl font-bold text-center ">
            A Minimal Trade Traker For The Web
          </h1>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <p className="max-sm:text-2xl max-sm:leading-9 text-4xl text-center">
            Introducing GreenHat, a simple and efficient tool to monitor your
            trades effortlessly.
          </p>
          <Link
            className="text-xl bg-black text-white p-2 font-bold rounded-md"
            href="/app"
          >
            Continue
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
