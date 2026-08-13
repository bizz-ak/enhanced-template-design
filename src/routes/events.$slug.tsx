import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Dot } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ShatterImage, FromSide, FromBelow } from "@/components/motion/ScrollFx";
import { events } from "@/data/site";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = events.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Event unavailable | TUCASA" }, { name: "robots", content: "noindex" }] };
    }
    const e = loaderData.event;
    return {
      meta: [
        { title: `${e.title} | TUCASA Nyerere Campus` },
        { name: "description", content: e.summary.slice(0, 155) },
        { property: "og:title", content: `${e.title} — TUCASA` },
        { property: "og:description", content: e.summary.slice(0, 155) },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: EventNotFound,
  component: EventDetail,
});

function EventDetail() {
  const { event } = Route.useLoaderData();
  const others = events.filter((e) => e.slug !== event.slug).slice(0, 3);

  return (
    <PageShell>
      <PageHero
        eyebrow={event.when}
        title={event.title}
        subtitle={event.summary}
        image={event.image}
        imageAlt={event.title}
      />

      <ShatterImage
        src={event.image}
        alt={event.title}
        caption={event.title}
        title={event.title}
        body={event.summary}
      />

      <section className="px-6 py-20 sm:px-12 lg:px-16">
        <FromSide dir="left">
          <h2 className="font-display text-3xl font-extrabold text-gold">Programme flow</h2>
        </FromSide>
        <ul className="mt-8 max-w-2xl space-y-4">
          {event.details.map((d) => (
            <li key={d} className="glass-panel flex items-center gap-2 rounded-xl px-5 py-4">
              <Dot className="size-6 shrink-0 text-gold" aria-hidden />
              <span className="text-muted-foreground">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 pb-24 sm:px-12 lg:px-16">
        <FromBelow>
          <h2 className="font-display text-3xl font-extrabold">More programmes</h2>
        </FromBelow>
        <Stagger className="mt-8 grid gap-6 sm:grid-cols-3">
          {others.map((e) => (
            <StaggerItem key={e.slug} className="glass-panel hover-lift overflow-hidden rounded-2xl">
              <Link to="/events/$slug" params={{ slug: e.slug }} className="group block">
                <img
                  src={e.image}
                  alt={e.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <p className="p-5 font-display text-lg font-bold text-gold">{e.title}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </PageShell>
  );
}

function EventNotFound() {
  return (
    <PageShell>
      <section className="px-6 py-32 text-center sm:px-12 lg:px-16">
        <h1 className="font-display text-4xl font-extrabold text-gold">Event not found</h1>
        <p className="mt-4 text-muted-foreground">This programme page does not exist.</p>
        <Link to="/events" className="underline-sweep mt-6 inline-block font-semibold text-gold">
          Back to all events
        </Link>
      </section>
    </PageShell>
  );
}
