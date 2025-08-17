const AboutPage = () => {
  return (
    <main className="flex-1 bg-gray-800 min-h-screen text-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* About Page Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500">
            Our Vision
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            A relentless pursuit of innovation and a commitment to excellence.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* Mission Statement Section */}
          <div className="p-8 bg-gray-900 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
            <p className="text-gray-300">
              At Transliscense, our mission is to deliver practical, user‑first tools that make
              language barriers disappear. We focus on clarity, speed, and reliability so you can
              translate confidently and stay in your flow.
            </p>
          </div>

          {/* Our Values Section */}
          <div className="p-8 bg-gray-900 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Our Values</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Innovation: Continuously exploring better ways to communicate across languages.</li>
              <li>Integrity: Clear, transparent practices and responsible use of APIs.</li>
              <li>Excellence: Performance, accessibility, and a clean, intuitive UX.</li>
              <li>Collaboration: Built to be extended, improved, and adapted.</li>
            </ul>
          </div>
        </div>

        {/* What We Do */}
        <section aria-labelledby="about-what-we-do" className="mt-16 text-left">
          <h2 id="about-what-we-do" className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-300 max-w-3xl">
            Transliscense is a lightweight web app for fast, accurate translations. It pairs a
            minimal interface with a flexible architecture so it can grow with new features and
            providers. Whether you are studying, working with global teams, or traveling, our goal is
            to keep the translation experience seamless and distraction‑free.
          </p>
        </section>

        {/* Key Features */}
        <section aria-labelledby="about-features" className="mt-16 text-left">
          <h2 id="about-features" className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-semibold">Fast and Focused</h3>
              <p className="mt-2 text-gray-400">Clean, responsive UI designed for speed and clarity.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-xl font-semibold">Multiple Languages</h3>
              <p className="mt-2 text-gray-400">Translate across a wide range of languages with ease.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🎛️</div>
              <h3 className="text-xl font-semibold">Configurable</h3>
              <p className="mt-2 text-gray-400">Environment‑based configuration for API keys and settings.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-xl font-semibold">Privacy‑Conscious</h3>
              <p className="mt-2 text-gray-400">No unnecessary tracking. Your text stays yours.</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section aria-labelledby="about-how" className="mt-16 text-left">
          <h2 id="about-how" className="text-3xl font-bold mb-8">How It Works</h2>
          <ol className="grid md:grid-cols-3 gap-6">
            <li className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-black font-bold">1</div>
              <h3 className="mt-4 text-xl font-semibold">Enter Your Text</h3>
              <p className="mt-2 text-gray-400">Paste or type the text you want to translate.</p>
            </li>
            <li className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-black font-bold">2</div>
              <h3 className="mt-4 text-xl font-semibold">Choose Languages</h3>
              <p className="mt-2 text-gray-400">Select source and target languages from the dropdowns.</p>
            </li>
            <li className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-black font-bold">3</div>
              <h3 className="mt-4 text-xl font-semibold">Translate</h3>
              <p className="mt-2 text-gray-400">Trigger translation and copy the result when ready.</p>
            </li>
          </ol>
        </section>

        {/* Tech Stack */}
        <section aria-labelledby="about-tech" className="mt-16 text-left">
          <h2 id="about-tech" className="text-3xl font-bold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-gray-900 text-gray-300">React</span>
            <span className="px-3 py-1 rounded-full bg-gray-900 text-gray-300">Vite</span>
            <span className="px-3 py-1 rounded-full bg-gray-900 text-gray-300">Tailwind CSS</span>
            <span className="px-3 py-1 rounded-full bg-gray-900 text-gray-300">Configurable Translation API</span>
          </div>
          <p className="mt-3 text-gray-400 max-w-3xl">
            Built with a modern toolchain for fast iteration and a smooth developer experience. The
            translation provider is abstracted so different services can be integrated as needed.
          </p>
        </section>

        {/* FAQ */}
        <section aria-labelledby="about-faq" className="mt-16 text-left">
          <h2 id="about-faq" className="text-3xl font-bold mb-6">FAQ</h2>
          <div className="space-y-4">
            <details className="bg-gray-900 rounded-xl p-5">
              <summary className="cursor-pointer text-white font-semibold">Is my text stored?</summary>
              <p className="mt-2 text-gray-400">
                The app is designed to be privacy‑conscious. Text is processed only for translation
                and is not stored beyond what is necessary to perform the request.
              </p>
            </details>
            <details className="bg-gray-900 rounded-xl p-5">
              <summary className="cursor-pointer text-white font-semibold">What languages are supported?</summary>
              <p className="mt-2 text-gray-400">
                The app supports a wide range of languages. Availability can vary based on the
                configured provider.
              </p>
            </details>
            <details className="bg-gray-900 rounded-xl p-5">
              <summary className="cursor-pointer text-white font-semibold">Can I use my own API key?</summary>
              <p className="mt-2 text-gray-400">
                Yes. The project reads configuration from environment variables so you can supply
                your own credentials where applicable.
              </p>
            </details>
          </div>
        </section>

        {/* Closing Callout */}
        <section className="mt-16">
          <div className="p-8 bg-gradient-to-r from-teal-500/20 to-sky-500/20 rounded-2xl border border-teal-500/30">
            <h2 className="text-2xl sm:text-3xl font-bold">Built for clarity. Ready to grow.</h2>
            <p className="mt-3 text-gray-200 max-w-3xl mx-auto">
              This project is continually improving. If you have ideas for features or enhancements,
              explore the codebase and make it your own.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
