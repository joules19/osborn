import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import NewsletterBanner from "@/components/ui/NewsletterBanner";

export const metadata: Metadata = {
  title: "Quality Standards",
  description:
    "Osborn is committed to providing the best possible service. ISO9001/2000 registered and I.R.T.E workshop accreditation.",
};

export default function QualityStandardsPage() {
  return (
    <>
      <PageBanner title="Quality Standards" />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Osborn are committed to providing the best possible service to
                all of their customers all of the time. It is the policy of
                Osborn Ltd to ensure customer satisfaction in terms of
                reliability, efficiency and safety.
              </p>
              <p>
                This commitment to quality extends from the Managing Director to
                all those engaged in services on behalf of Osborn Ltd.
                It&apos;s reviewed on a regular basis for compliance to specified
                requirements, and to ensure a culture of continual improvement
                throughout the company.
              </p>
              <p>
                This policy shall be supported by a fully documented quality
                management system based upon the requirements of the
                international standard for quality ISO9001 (2000) and the
                publicly available specification PAS 43 (2008).
              </p>
              <p>
                Performance of the quality system shall be monitored by the
                Managing Director for compliance with the requirements of PAS
                43, ISO 9001 and all applicable legal requirements.
              </p>
              <p>
                Osborn have been an ISO9001/2000 registered company for some
                time. We now plan to go a step further, with I.R.T.E. workshop
                accreditation. This is an important recognition of correct
                procedures and tooling, as part of our technician training.
                It&apos;s a high standard, and one that the best of workshops
                should be aiming for.
              </p>
            </div>

            {/* Accreditation badges */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { title: "ISO9001/2000", desc: "Registered Company" },
                { title: "I.R.T.E.", desc: "Workshop Accreditation" },
              ].map((badge) => (
                <div
                  key={badge.title}
                  className="p-6 bg-[#0d1f3c] rounded-xl text-center text-white"
                >
                  <div className="text-2xl font-black text-[#27AAE1] mb-1">
                    {badge.title}
                  </div>
                  <div className="text-xs text-slate-300 uppercase tracking-wide">
                    {badge.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy policy */}
          <div>
            <h2 className="text-2xl font-bold text-[#27AAE1] mb-6">
              Privacy Policy
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
              <p>
                Osborn Transport Services keep all user information (from
                mailing lists, correspondence etc) strictly confidential. This
                means that we will not exchange your e-mail address with anyone
                else.
              </p>
              <p>
                As with most sites, we collect general information on visits to
                our pages. This information is used only for statistical
                purposes. None of this information is linked back to you as an
                individual.
              </p>
              <p>
                If you have any questions or concerns, please feel free to
                contact us at:{" "}
                <a
                  href="mailto:admin@osborntransportservices.com"
                  className="text-[#0057A8] hover:text-[#27AAE1] transition-colors font-medium"
                >
                  admin@osborntransportservices.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </>
  );
}
