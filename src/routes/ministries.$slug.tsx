import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { AssembleImage, FromSide, FromBelow } from "@/components/motion/ScrollFx";
import { ministries } from "@/data/site";

export const Route = createFileRoute("/ministries/$slug")({
  loader: ({ params }) => {
    const ministry = ministries.find((m) => m.slug === params.slug);
    if (!ministry) throw notFound();
    return { ministry };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Ministry unavailable | TUCASA" }, { name: "robots", content: "noindex" }] };
    }
    const m = loaderData.ministry;
    return {
      meta: [
        { title: `${m.name} | TUCASA Nyerere Campus` },
        { name: "description", content: m.intro.slice(0, 155) },
        { property: "og:title", content: `${m.name} — TUCASA Ministry` },
        { property: "og:description", content: m.intro.slice(0, 155) },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: MinistryNotFound,
  component: MinistryDetail,
});

function MinistryDetail() {
  const { ministry } = Route.useLoaderData();
  const others = ministries.filter((m) => m.slug !== ministry.slug).slice(0, 3);

  return (
    <PageShell>
      <PageHero
        eyebrow="Ministry"
        title={ministry.name}
        subtitle={ministry.tagline}
        image={ministry.image}
        imageAlt={ministry.name}
      />

      <AssembleImage src={ministry.image} alt={ministry.name} caption={ministry.name} />

      <section className="px-6 py-20 sm:px-12 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <FromSide dir="left">
            <h2 className="font-display text-3xl font-extrabold text-gold">About this ministry</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{ministry.intro}</p>
            <ul className="mt-8 space-y-3">
              {ministry.focus.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </FromSide>
          <FromSide dir="right" className="glass-panel h-fit rounded-2xl p-7">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Meeting time</p>
            <p className="mt-2 font-semibold">{ministry.meeting}</p>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-gold">Led by</p>
            <p className="mt-2 font-semibold">{ministry.leader}</p>
            <Link
              to="/join"
              className="mt-8 block rounded-lg px-4 py-3 text-center text-sm font-bold text-gold-foreground"
              style={{ background: "var(--gradient-gold)" }}
            >
              Join this ministry
            </Link>
          </FromSide>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-12 lg:px-16">
        <FromBelow>
          <h2 className="font-display text-3xl font-extrabold">Other ministries</h2>
        </FromBelow>
        <Stagger className="mt-8 grid gap-6 sm:grid-cols-3">
          {others.map((m) => (
            <StaggerItem key={m.slug} className="glass-panel hover-lift overflow-hidden rounded-2xl">
              <Link to="/ministries/$slug" params={{ slug: m.slug }} className="group block">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <p className="p-5 font-display text-lg font-bold text-gold">{m.name}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </PageShell>
  );
}

function MinistryNotFound() {
  return (
    <PageShell>
      <section className="px-6 py-32 text-center sm:px-12 lg:px-16">
        <h1 className="font-display text-4xl font-extrabold text-gold">Ministry not found</h1>
        <p className="mt-4 text-muted-foreground">This ministry page does not exist.</p>
        <Link to="/ministries" className="underline-sweep mt-6 inline-block font-semibold text-gold">
          Back to all ministries
        </Link>
      </section>
    </PageShell>
  );
}
