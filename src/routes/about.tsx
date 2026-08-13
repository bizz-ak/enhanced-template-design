import { createFileRoute } from "@tanstack/react-router";
import { SiteSidebar } from "@/components/SiteSidebar";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TUCASA | Nyerere Campus UDSM" },
      {
        name: "description",
        content:
          "Learn about TUCASA Nyerere Campus — our mission, history and the ministries that shape Adventist student life at UDSM.",
      },
      { property: "og:title", content: "About TUCASA Nyerere Campus" },
      {
        property: "og:description",
        content: "Our mission, history and ministries at the University of Dar es Salaam.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  { title: "Mission", text: "To nurture Adventist students spiritually, academically and socially while sharing hope on campus." },
  { title: "Vision", text: "A campus where every student encounters Christ through a caring, serving student family." },
  { title: "Motto", text: "Living the Mission, Reaching the Nations." },
];

const ministries = [
  "Music & Choir",
  "Prayer Bands",
  "Bible Study",
  "Personal Ministries",
  "Health & Wellness",
  "Community Outreach",
  "Media & Publicity",
  "Welfare & Hospitality",
];

function About() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row-reverse">
      <SiteSidebar />

      <main className="min-w-0 flex-1 px-6 py-20 sm:px-12 lg:px-16">
        <h1 className="animate-rise font-display text-5xl font-extrabold">
          About <span className="text-gradient-gold">TUCASA</span>
        </h1>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          TUCASA is the Tanzania University and College Adventist Student Association. At Nyerere
          Campus, University of Dar es Salaam, we bring together students who want to grow in
          faith, excel in their studies and serve the community around them.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <article key={v.title} className="glass-panel hover-lift rounded-2xl p-7">
              <h2 className="font-display text-xl font-bold text-gold">{v.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </article>
          ))}
        </div>

        <h2 className="mt-16 font-display text-3xl font-bold">Our ministries</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {ministries.map((m) => (
            <span
              key={m}
              className="rounded-full border border-border bg-surface-2 px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold"
            >
              {m}
            </span>
          ))}
        </div>

        <footer className="mt-20 border-t border-border pt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} TUCASA Nyerere Campus, University of Dar es Salaam.
        </footer>
      </main>
    </div>
  );
}
