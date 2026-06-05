export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Local SEO Monitoring
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Monitor Your Google My Business<br />
          <span className="text-[#58a6ff]">Listing & Competitors</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-2xl mx-auto">
          Track every change to your GMB listing, spy on competitor updates, and get instant alerts when your local rankings drop — with actionable fixes included.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href={checkoutUrl} className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors">
            Start Monitoring — $14/mo
          </a>
          <a href="#faq" className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-4 rounded-lg text-lg transition-colors">
            Learn More
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📍</div>
            <h3 className="font-semibold text-white mb-2">Listing Change Alerts</h3>
            <p className="text-[#8b949e] text-sm">Get notified instantly when your business name, hours, photos, or reviews change — catch unauthorized edits fast.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">🔍</div>
            <h3 className="font-semibold text-white mb-2">Competitor Tracking</h3>
            <p className="text-[#8b949e] text-sm">Monitor up to 10 competitors in your local pack. See their rating changes, new reviews, and listing updates in real time.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📈</div>
            <h3 className="font-semibold text-white mb-2">Ranking Drop Alerts</h3>
            <p className="text-[#8b949e] text-sm">Detect local ranking drops before they hurt your business, with specific optimization suggestions to recover fast.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</span>
          <h3 className="text-xl font-bold text-white mb-2">Pro Plan</h3>
          <div className="text-5xl font-bold text-[#58a6ff] mb-1">$14</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "1 GMB listing monitored",
              "Up to 10 competitors tracked",
              "Daily ranking checks",
              "Instant email & SMS alerts",
              "Optimization recommendations",
              "Monthly performance reports",
              "Cancel anytime"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a href={checkoutUrl} className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors">
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Secure payment via Lemon Squeezy. 7-day money-back guarantee.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does GMB Monitor detect listing changes?</h3>
            <p className="text-[#8b949e] text-sm">We combine the Google My Business API with scheduled web scraping to check your listing multiple times per day. Any change — from a photo addition to a business hour edit — triggers an immediate alert.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I monitor multiple locations?</h3>
            <p className="text-[#8b949e] text-sm">The Pro plan covers 1 primary listing. For agencies or multi-location businesses needing more, contact us for a custom plan with volume discounts.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What kind of optimization suggestions do I get?</h3>
            <p className="text-[#8b949e] text-sm">When a ranking drop is detected, our system analyzes your listing against top competitors and provides specific, prioritized actions — like adding missing categories, responding to reviews, or updating photos.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} GMB Monitor. All rights reserved.
      </footer>
    </main>
  );
}
