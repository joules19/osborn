"use client";

import { useState } from "react";
import PageBanner from "@/components/ui/PageBanner";
import NewsletterBanner from "@/components/ui/NewsletterBanner";
import { COMPANY } from "@/lib/data";
import { Phone, Mail, MapPin, Download } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageBanner title="Contact" />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <p className="text-slate-700 leading-relaxed mb-8">
              If you would like to find out more about Osborn, or have any
              questions about our services, do please get in touch.
            </p>

            <dl className="space-y-6 mb-8">
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                  By phone
                </dt>
                <dd>
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-[#0057A8] font-bold text-lg hover:text-[#27AAE1] transition-colors"
                  >
                    <Phone size={18} aria-hidden="true" />
                    {COMPANY.phone}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                  By email
                </dt>
                <dd>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-2 text-[#0057A8] hover:text-[#27AAE1] transition-colors"
                  >
                    <Mail size={16} aria-hidden="true" />
                    {COMPANY.email}
                  </a>
                </dd>
                <dd className="mt-1">
                  <a
                    href={`mailto:${COMPANY.markEmail}`}
                    className="flex items-center gap-2 text-[#0057A8] hover:text-[#27AAE1] transition-colors text-sm"
                  >
                    <Mail size={14} aria-hidden="true" />
                    {COMPANY.markEmail} (Mark Foster)
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                  By post / in person
                </dt>
                <dd>
                  <a
                    href={COMPANY.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-slate-700 hover:text-[#0057A8] transition-colors"
                    aria-label="Get directions to Osborn Transport Services"
                  >
                    <MapPin
                      size={16}
                      className="mt-0.5 shrink-0 text-[#0057A8]"
                      aria-hidden="true"
                    />
                    <address className="not-italic">
                      Osborn Transport
                      <br />
                      {COMPANY.address.line1}
                      <br />
                      {COMPANY.address.line2}
                      <br />
                      {COMPANY.address.town}
                      <br />
                      {COMPANY.address.county}
                      <br />
                      {COMPANY.address.postcode}
                    </address>
                  </a>
                </dd>
              </div>
            </dl>

            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden border border-slate-200 aspect-video mb-6">
              <iframe
                src="https://www.google.com/maps?q=Osborn+Transport+Services,+Gossard+Park,+Grovebury+Road,+Leighton+Buzzard,+LU7+4SQ&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Osborn Transport Services location map"
              />
            </div>

            {/* Vacancies */}
            <div className="bg-[#EEF4FA] rounded-xl p-6 mb-4">
              <h3 className="font-bold text-[#1B3260] mb-2">Vacancies</h3>
              <p className="text-sm text-slate-600">
                We are always interested in hearing from talented and ambitious
                technicians. You can drop us a line with your CV by post, or by
                email to{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-[#0057A8] hover:text-[#27AAE1] transition-colors"
                >
                  {COMPANY.email}
                </a>
              </p>
            </div>

            {/* Brochure download */}
            <div className="bg-[#EEF4FA] rounded-xl p-6">
              <h3 className="font-bold text-[#1B3260] mb-2">
                Download a copy of our brochure
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                To download a PDF of our latest brochure (file size 2.4Mb),
                please click below.
              </p>
              <Button href="#" variant="outline" size="sm">
                <Download size={14} className="mr-2" aria-hidden="true" />
                Download Brochure (PDF)
              </Button>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold text-[#1B3260] mb-6">
              Send us a message
            </h2>

            {submitted ? (
              <div className="p-8 bg-[#EEF4FA] rounded-xl text-center">
                <div className="text-5xl mb-3" aria-hidden="true">✓</div>
                <h3 className="text-xl font-bold text-[#1B3260] mb-2">
                  Message sent!
                </h3>
                <p className="text-slate-600">
                  Thank you for getting in touch. We&apos;ll get back to you
                  as soon as possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                aria-label="Contact form"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 mb-1"
                  >
                    Full Name{" "}
                    <span className="text-red-500" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0057A8] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 mb-1"
                  >
                    Email Address{" "}
                    <span className="text-red-500" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0057A8] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-slate-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0057A8] focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-1"
                  >
                    Message{" "}
                    <span className="text-red-500" aria-label="required">
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0057A8] focus:border-transparent resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </>
  );
}
