import { useState } from 'react';

const initialForm = { name: '', email: '', subject: '', message: '' };

const ContactPage = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [copied, setCopied] = useState(null); // 'email' | 'phone' | null

  const validate = (data) => {
    const e = {};
    if (!data.name.trim()) e.name = 'Name is required';
    if (!data.email.trim()) {
      e.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      e.email = 'Enter a valid email address';
    }
    if (!data.subject.trim()) e.subject = 'Subject is required';
    if (!data.message.trim()) e.message = 'Message cannot be empty';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    try {
      setSubmitting(true);
      setStatus(null);
      // Simulate sending message (replace with your API call)
      await new Promise((r) => setTimeout(r, 1200));
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const copy = async (text, which) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(which);
      setTimeout(() => setCopied(null), 1200);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  return (
    <main className="flex-1 bg-gray-800 min-h-screen text-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Have a question, feedback, or a feature request? Reach out and we��ll get back to you.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact Info */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <h2 className="text-xl font-bold mb-2">Email</h2>
              <p className="text-gray-400">support@transliscense.app</p>
              <div className="mt-3 flex gap-2">
                <a
                  href="mailto:support@transliscense.app"
                  className="px-3 py-1 rounded-lg bg-teal-600/20 text-teal-300 border border-teal-600/40 hover:bg-teal-600/30 transition"
                >
                  Compose
                </a>
                <button
                  onClick={() => copy('support@transliscense.app', 'email')}
                  className="px-3 py-1 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 hover:bg-gray-700 transition"
                >
                  {copied === 'email' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="p-6 bg-gray-900 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <h2 className="text-xl font-bold mb-2">Phone</h2>
              <p className="text-gray-400">+1 (555) 123-4567</p>
              <div className="mt-3 flex gap-2">
                <a
                  href="tel:+15551234567"
                  className="px-3 py-1 rounded-lg bg-teal-600/20 text-teal-300 border border-teal-600/40 hover:bg-teal-600/30 transition"
                >
                  Call
                </a>
                <button
                  onClick={() => copy('+1 (555) 123-4567', 'phone')}
                  className="px-3 py-1 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 hover:bg-gray-700 transition"
                >
                  {copied === 'phone' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="p-6 bg-gray-900 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <h2 className="text-xl font-bold mb-2">Office Hours</h2>
              <ul className="text-gray-400 space-y-1">
                <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
                <li>Sat: 10:00 AM – 2:00 PM</li>
                <li>Sun: Closed</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-900 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <h2 className="text-xl font-bold mb-2">Follow Us</h2>
              <div className="flex gap-4 text-gray-400">
                <a href="#" className="hover:text-white transition">Twitter</a>
                <a href="#" className="hover:text-white transition">Instagram</a>
                <a href="#" className="hover:text-white transition">GitHub</a>
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <section className="lg:col-span-2">
            <div className="p-8 bg-gray-900 rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-bold">Send a Message</h2>
              <p className="mt-2 text-gray-400">We usually respond within one business day.</p>

              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-300 mb-2">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={`w-full p-3 rounded-xl bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-300 mb-2">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`w-full p-3 rounded-xl bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-300 mb-2">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className={`w-full p-3 rounded-xl bg-gray-800 border ${errors.subject ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Feature request, bug report, feedback..."
                  />
                  {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className={`w-full p-3 rounded-xl bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-teal-500 resize-y`}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a bit more..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-3 bg-gradient-to-r from-teal-500 to-sky-600 text-white font-bold rounded-xl shadow-lg hover:from-teal-600 hover:to-sky-700 transition duration-300 ease-in-out transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {submitting ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  {status === 'success' && (
                    <span className="text-sm text-teal-300">Thanks! Your message has been sent.</span>
                  )}
                  {status === 'error' && (
                    <span className="text-sm text-red-300">Something went wrong. Please try again.</span>
                  )}
                </div>

                <div className="pt-2 text-sm text-gray-400">
                  Or email us directly at{' '}
                  <a className="text-teal-300 hover:text-teal-200" href="mailto:support@transliscense.app">support@transliscense.app</a>
                </div>
              </form>
            </div>
          </section>
        </div>

        {/* FAQ */}
        <section aria-labelledby="contact-faq" className="mt-16">
          <h2 id="contact-faq" className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <details className="bg-gray-900 rounded-xl p-5 transition-transform duration-300 hover:-translate-y-1">
              <summary className="cursor-pointer text-white font-semibold">How soon will I receive a response?</summary>
              <p className="mt-2 text-gray-400">We aim to respond within one business day. Complex queries may take a bit longer.</p>
            </details>
            <details className="bg-gray-900 rounded-xl p-5 transition-transform duration-300 hover:-translate-y-1">
              <summary className="cursor-pointer text-white font-semibold">Do you support enterprise requests?</summary>
              <p className="mt-2 text-gray-400">Yes, reach out with your requirements and we’ll coordinate next steps.</p>
            </details>
            <details className="bg-gray-900 rounded-xl p-5 transition-transform duration-300 hover:-translate-y-1">
              <summary className="cursor-pointer text-white font-semibold">Is my data secure?</summary>
              <p className="mt-2 text-gray-400">We are privacy‑conscious and keep data handling to the minimum needed to operate.</p>
            </details>
            <details className="bg-gray-900 rounded-xl p-5 transition-transform duration-300 hover:-translate-y-1">
              <summary className="cursor-pointer text-white font-semibold">Can I request a new feature?</summary>
              <p className="mt-2 text-gray-400">Absolutely. Use the form above with subject “Feature request” and include details.</p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16">
          <div className="p-8 bg-gradient-to-r from-teal-500/20 to-sky-500/20 rounded-2xl border border-teal-500/30 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">We’re here to help</h2>
            <p className="mt-3 text-gray-200 max-w-3xl mx-auto">
              Share as much context as you can and we’ll make sure it reaches the right person.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
