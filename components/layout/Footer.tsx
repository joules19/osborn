import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, NAV_ITEMS } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-4 border-[#0057A8]" role="contentinfo">
      {/* Main footer */}
      <div className="bg-[#f8f9fb] py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Osborn Transport Services home">
              <Image
                src="/logo.png"
                alt="Osborn Transport Services"
                width={160}
                height={46}
                className="h-11 w-auto mb-4"
              />
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              Professional fleet maintenance, servicing and 24/7 breakdown
              recovery. ISO9001 registered.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#1B3260] mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-2 hover:text-[#0057A8] transition-colors"
                >
                  <Phone size={15} className="mt-0.5 shrink-0 text-[#0057A8]" aria-hidden="true" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-2 hover:text-[#0057A8] transition-colors break-all"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-[#0057A8]" aria-hidden="true" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-[#0057A8] transition-colors"
                  aria-label="Get directions to Osborn Transport Services"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0 text-[#0057A8]" aria-hidden="true" />
                  <address className="not-italic leading-snug">
                    {COMPANY.address.line1},<br />
                    {COMPANY.address.line2},<br />
                    {COMPANY.address.town},<br />
                    {COMPANY.address.county} {COMPANY.address.postcode}
                  </address>
                </a>
              </li>
            </ul>
          </div>

          {/* Services quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#1B3260] mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.find((i) => i.label === "Services")?.children?.map(
                (service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-slate-600 hover:text-[#0057A8] transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#1B3260] mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Subscribe for industry news, legislation updates and service
              information.
            </p>
            <Button href="/contact" size="sm">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#0d1f3c] py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>
            © {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/quality-standards" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>
            <span>{COMPANY.accreditations.join(" · ")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
