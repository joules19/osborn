"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import Button from "./Button";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="bg-[#EEF4FA] py-12 px-4 border-t border-blue-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Mail className="text-[#0057A8] shrink-0" size={28} aria-hidden="true" />
          <div>
            <h2 className="text-lg font-bold text-[#1B3260]">
              Subscribe to our regular newsletter
            </h2>
            <p className="text-sm text-slate-600 mt-0.5">
              Industry news, service updates and fleet legislation changes — every two months.
            </p>
          </div>
        </div>

        {submitted ? (
          <p className="text-[#0057A8] font-semibold">
            Thank you for subscribing!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex gap-2 w-full md:w-auto"
            aria-label="Newsletter signup form"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 md:w-64 px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0057A8] focus:border-transparent"
            />
            <Button type="submit" size="md">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
