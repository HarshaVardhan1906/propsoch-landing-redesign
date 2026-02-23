import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-6 py-4">
          <Image
            src="/images/propsoch-logo.jpg"
            alt="Propsoch logo"
            width={36}
            height={36}
            priority
          />
          <span className="text-xl font-semibold text-orange-500">
            Propsoch
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 px-6 py-24 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
          Visit curated homes,{" "}
          <span className="text-orange-500">negotiate smarter</span>{" "}
          & buy intelligently
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-gray-600">
          End-to-end guidance from property experts who have helped buyers
          make confident decisions and negotiate fair prices.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-lg bg-orange-500 px-8 py-4 font-medium text-white shadow hover:bg-orange-600 transition">
            Get Started
          </button>

          <button className="rounded-lg border border-orange-500 px-8 py-4 font-medium text-orange-500 hover:bg-orange-50 transition">
            Book an Appointment
          </button>
        </div>
      </section>

      {/* Why Choose */}
    <section className="bg-orange-50 px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold">
          Why choose Propsoch?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          We combine data, expert insights, and transparent analysis to help
          buyers avoid costly mistakes and negotiate with confidence.
        </p>
      </section>

      {/* How It Helps */}
      <section className="bg-gray-50 px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold">
          How Propsoch helps you
        </h2>

        <div className="mx-auto mt-8 max-w-md space-y-4 text-gray-600">
          <p>✔ Verified property and pricing data</p>
          <p>✔ Expert guidance throughout the buying process</p>
          <p>✔ Clear insights to negotiate confidently</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-semibold">
            What you get with Propsoch
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="font-medium">Fair Price Analysis</h3>
              <p className="mt-2 text-sm text-gray-600">
                Know the true market value of a property before you negotiate.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Expert Guidance</h3>
              <p className="mt-2 text-sm text-gray-600">
                Get advice from property experts who understand local markets.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Risk Reduction</h3>
              <p className="mt-2 text-sm text-gray-600">
                Avoid costly mistakes with data-backed decision making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
     <section className="bg-orange-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold">
            Trusted by serious home buyers
          </h2>

          <p className="mt-4 text-gray-600">
            Our data-driven approach has helped hundreds of buyers make smarter
            property decisions and negotiate with confidence.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-orange-500">200+</p>
              <p className="mt-2 text-sm text-gray-600">Homes analyzed</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-orange-500">₹100Cr+</p>
              <p className="mt-2 text-sm text-gray-600">Transaction value</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-orange-500">95%</p>
              <p className="mt-2 text-sm text-gray-600">Buyer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
     <footer className="bg-gray-50 border-t px-6 py-8 text-center text-sm text-gray-500">
        <p className="font-medium text-gray-700">Propsoch</p>
        <p className="mt-1">
          Helping homebuyers make smarter property decisions.
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} Propsoch. All rights reserved.
        </p>
      </footer>

    </main>
  );
}