import Link from "next/link";

function Hero() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="bg-sky-500 text-white min-h-screen flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Grow your wealth, responsibly.
        </h1>

        <p className="text-xl mb-2 text-center font-semibold">
          Join thousands of users managing their investments with our platform.
        </p>
        <p className="text-lg leading-relaxed mb-4 text-center">
          Our platform makes investing simple, accessible, and impactful. Join
          us and build a brighter financial future.
        </p>
        <Link href={"/auth/login"}>
          <button className="bg-white  font-semibold px-6 py-3 rounded-md shadow-md h-16 text-xl text-sky-500 ">
            Start investing today
          </button>
        </Link>
      </div>
      {/* Features Section */}

      <div className="text-center bg-gray-100 py-12 px-8">
        <h2 className="text-3xl font-bold mb-2">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  w-full">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-md shadow-md w-full">
            <h3 className="text-xl font-bold mb-2">Real-Time Tracking</h3>
            <p className="text-gray-700">
              Track your investments in real-time to stay updated on your
              portfolio.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-md shadow-md w-full">
            <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
            <p className="text-gray-700">
              Securely deposit, withdraw, and manage your funds with confidence.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-md shadow-md w-full">
            <h3 className="text-xl font-bold mb-2">User-Friendly Interface</h3>
            <p className="text-gray-700">
              Enjoy a simple and intuitive interface designed for ease of use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
