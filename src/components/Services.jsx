const ServicesPage = () => {
  return (
    <main className="flex-1 bg-gray-800 min-h-screen text-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500">
            Services
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Tools and features that make translation effortless, accurate, and fast.
          </p>
        </header>

        {/* Core Services Grid */}
        <section aria-labelledby="core-services" className="text-left">
          <h2 id="core-services" className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-xl font-semibold">Multi‑Language Translation</h3>
              <p className="mt-2 text-gray-400">Translate between a wide range of languages with a clean, intuitive interface.</p>
              <ul className="mt-3 list-disc list-inside text-gray-400 space-y-1">
                <li>Fast response</li>
                <li>Accurate results</li>
                <li>Easy copy/share</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🧭</div>
              <h3 className="text-xl font-semibold">Language Selection</h3>
              <p className="mt-2 text-gray-400">Choose target languages from an accessible, responsive selector.</p>
              <ul className="mt-3 list-disc list-inside text-gray-400 space-y-1">
                <li>Popular presets</li>
                <li>Broad coverage</li>
                <li>Keyboard friendly</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold">Performance Focused</h3>
              <p className="mt-2 text-gray-400">Built with Vite + React for a snappy experience across devices.</p>
              <ul className="mt-3 list-disc list-inside text-gray-400 space-y-1">
                <li>Low latency</li>
                <li>Optimized bundles</li>
                <li>Responsive UI</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🧰</div>
              <h3 className="text-xl font-semibold">Configurable Backend</h3>
              <p className="mt-2 text-gray-400">Environment‑based configuration enables flexible provider integration.</p>
              <ul className="mt-3 list-disc list-inside text-gray-400 space-y-1">
                <li>API key management</li>
                <li>Easy provider swaps</li>
                <li>Scalable setup</li>
              </ul>
            </div>

            {/* Card 5 */}
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-xl font-semibold">Privacy‑Conscious</h3>
              <p className="mt-2 text-gray-400">No unnecessary tracking. Focused on secure, responsible usage.</p>
              <ul className="mt-3 list-disc list-inside text-gray-400 space-y-1">
                <li>Minimal data footprint</li>
                <li>Clear configuration</li>
                <li>Transparent behavior</li>
              </ul>
            </div>

            {/* Card 6 */}
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🔌</div>
              <h3 className="text-xl font-semibold">Extensible Architecture</h3>
              <p className="mt-2 text-gray-400">A modular codebase makes it straightforward to add new features.</p>
              <ul className="mt-3 list-disc list-inside text-gray-400 space-y-1">
                <li>Composable React components</li>
                <li>Clear separation of concerns</li>
                <li>HOC pattern for layouts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section aria-labelledby="use-cases" className="mt-16 text-left">
          <h2 id="use-cases" className="text-3xl font-bold mb-8 text-center">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold">Students & Learners</h3>
              <p className="mt-2 text-gray-400">Quickly translate study material and practice new languages with ease.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold">Remote Teams</h3>
              <p className="mt-2 text-gray-400">Communicate across borders and keep collaboration smooth and clear.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold">Travelers</h3>
              <p className="mt-2 text-gray-400">Translate on the go and stay confident in unfamiliar environments.</p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section aria-labelledby="process" className="mt-16 text-left">
          <h2 id="process" className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <ol className="grid md:grid-cols-4 gap-6">
            <li className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-black font-bold">1</div>
              <h3 className="mt-4 text-lg font-semibold">Enter Text</h3>
              <p className="mt-2 text-gray-400">Paste or type your content into the editor.</p>
            </li>
            <li className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-black font-bold">2</div>
              <h3 className="mt-4 text-lg font-semibold">Pick Languages</h3>
              <p className="mt-2 text-gray-400">Select source and target languages from the dropdown.</p>
            </li>
            <li className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-black font-bold">3</div>
              <h3 className="mt-4 text-lg font-semibold">Translate</h3>
              <p className="mt-2 text-gray-400">Run the translation and get a clear output instantly.</p>
            </li>
            <li className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-black font-bold">4</div>
              <h3 className="mt-4 text-lg font-semibold">Copy or Share</h3>
              <p className="mt-2 text-gray-400">Copy the result or integrate it where you need it.</p>
            </li>
          </ol>
        </section>

        {/* CTA */}
        <section className="mt-16">
          <div className="p-8 bg-gradient-to-r from-teal-500/20 to-sky-500/20 rounded-2xl border border-teal-500/30 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">Need something custom?</h2>
            <p className="mt-3 text-gray-200 max-w-3xl mx-auto">
              The project is designed to be extended. Add features, swap providers, or tailor the UI
              for your workflow.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ServicesPage;
