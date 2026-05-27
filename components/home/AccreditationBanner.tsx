import { BadgeCheck } from "lucide-react";
import Link from "next/link";

export default function AccreditationBanner() {
  return (
    <div
      className="flex flex-col gap-4"
      aria-label="Accreditation information"
    >
      <BadgeCheck
        className="text-[#0057A8] shrink-0"
        size={36}
        aria-hidden="true"
      />
      <div>
        <p className="text-[#1B3260] font-semibold text-sm leading-relaxed">
          Osborn have been an{" "}
          <strong>ISO9001/2000 registered company</strong> for some time. We
          are now going a step further, with{" "}
          <strong>I.R.T.E workshop accreditation</strong> — an important
          recognition of correct procedures, tooling, and technician training.
        </p>
        <Link
          href="/quality-standards"
          className="text-[#0057A8] text-sm font-semibold hover:text-[#27AAE1] transition-colors mt-2 inline-block"
        >
          Learn about our quality standards →
        </Link>
      </div>
    </div>
  );
}
