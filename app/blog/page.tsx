import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import NewsletterBanner from "@/components/ui/NewsletterBanner";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Latest news and updates from Osborn Transport Services — industry news, fleet management tips and legislation updates.",
};

const SAMPLE_POSTS = [
  {
    title: "New DVSA Roadworthiness Regulations — What They Mean for Your Fleet",
    date: "March 2025",
    excerpt:
      "The DVSA has issued updated guidance on roadworthiness requirements. Here's what fleet operators need to know and how Osborn can help.",
    slug: "#",
  },
  {
    title: "The Importance of Regular Particulate Filter Maintenance",
    date: "January 2025",
    excerpt:
      "Diesel particulate filters must be properly maintained to keep your vehicles compliant and efficient. Osborn explains what you need to know.",
    slug: "#",
  },
  {
    title: "Understanding MoT Requirements for Commercial Vehicles",
    date: "November 2024",
    excerpt:
      "With MoT failure rates for HGVs above 20% nationally, proper preparation is essential. Osborn achieved 100% pass rates — here's how.",
    slug: "#",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageBanner title="Blog" />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_POSTS.map((post) => (
            <article
              key={post.title}
              className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="h-2 bg-gradient-to-r from-[#0057A8] to-[#27AAE1]" aria-hidden="true" />
              <div className="p-6">
                <time className="text-xs font-bold uppercase tracking-widest text-[#27AAE1]">
                  {post.date}
                </time>
                <h2 className="text-lg font-bold text-[#1B3260] mt-2 mb-3 leading-snug group-hover:text-[#0057A8] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Button href={post.slug} variant="ghost" size="sm">
                  Read More →
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <NewsletterBanner />
    </>
  );
}
