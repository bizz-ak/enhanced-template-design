import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ShatterImage, FromBelow } from "@/components/motion/ScrollFx";
import { img, ministries } from "@/data/site";

export const Route = createFileRoute("/ministries/")({
  head: () => ({
    meta: [
      { title: "Ministries | TUCASA Nyerere Campus UDSM" },
      {
        name: "description",
        content:
          "Music, prayer, Bible study, outreach, health, media, welfare and evangelism — find the TUCASA ministry where you belong.",
      },
      { property: "og:title", content: "TUCASA Ministries" },
      { property: "og:description", content: "Eight student-led ministries serving Nyerere Campus and beyond." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MinistriesPage,
});

function MinistriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Ministries"
        title="Serve where your gift fits"
        subtitle="Every member belongs to at least one ministry. Whatever your talent — voice, hands, code or compassion — there is a place for you."
        image={img.choir}
        imageAlt="TUCASA choir ministering on stage"
      />

      <ShatterImage
        src={img.media}
        alt="Media team filming and streaming a campus service"
        caption="Many pieces · One body"
        title="Many gifts, one body"
        body="Media, music, prayer, welfare, outreach — each ministry is a piece, and together they form the picture of a serving church on campus."
      />

      <section className="px-6 py-20 pb-24 sm:px-12 lg:px-16">
        <FromBelow>
          <h2 className="font-display text-4xl font-extrabold text-gold">All ministries</h2>
        </FromBelow>
        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((m) => (
            <StaggerItem key={m.slug} className="glass-panel hover-lift overflow-hidden rounded-2xl">
              <Link to="/ministries/$slug" params={{ slug: m.slug }} className="group block">
                <div className="overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-gold">{m.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {m.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.intro}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </PageShell>
  );
}
