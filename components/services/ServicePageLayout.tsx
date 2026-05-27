import { ReactNode } from "react";
import NewsletterBanner from "@/components/ui/NewsletterBanner";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/data";
import Link from "next/link";

interface ServicePageLayoutProps {
  children: ReactNode;
  subNav?: ReactNode;
}

export default function ServicePageLayout({
  children,
  subNav,
}: ServicePageLayoutProps) {
  return (
    <>
      {subNav}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {children}
      </div>

      {/* Emergency call-out */}
      <aside className="bg-[#0d1f3c] py-8 px-4" aria-label="Emergency contact">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">
              Need urgent help? We answer calls 24/7.
            </p>
            <p className="text-slate-400 text-sm">
              All calls answered in person — no recorded messages.
            </p>
          </div>
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 bg-[#27AAE1] text-white px-6 py-3 rounded font-bold hover:bg-[#1b95cc] transition-colors shrink-0"
          >
            <Phone size={18} aria-hidden="true" />
            {COMPANY.phone}
          </a>
        </div>
      </aside>

      <NewsletterBanner />
    </>
  );
}
