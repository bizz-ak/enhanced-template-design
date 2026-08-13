import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PinnedScene, FromBelow } from "@/components/motion/ScrollFx";
import { SplitBackdrop, DriftBackdrop } from "@/components/motion/CinemaFx";
import { img, events } from "@/data/site";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events & Programmes | TUCASA Nyerere Campus" },
      {
        name: "description",
        content:
          "Friday vespers, Sabbath worship, weeks of prayer, campus crusades, baptisms and health expos — the TUCASA calendar.",
      },
      { property: "og:title", content: "TUCASA Events & Programmes" },
      { property: "og:description", content: "Weekly worship and annual programmes at Nyerere Campus, UDSM." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Events"
        title="Our calendar of worship and mission"
        subtitle="From a quiet Friday sunset to a two-week evangelistic crusade — here is how the TUCASA year unfolds."
        image={img.worship}
        imageAlt="Students worshipping during vespers"
      />

      <PinnedScene
        src={img.crusade}
        alt="Evening evangelistic meeting on campus"
        eyebrow="Highlight"
        title="The campus crusade"
        lines={[
          "Two weeks of nightly meetings, planned and preached entirely by students.",
          "A health expo by day, music and preaching by night.",
          "It ends the way it always does — with baptisms at the shore.",
        ]}
      />

      <SplitBackdrop
        src={img.bgSunrise}
        alt="Sunrise over the campus"
        eyebrow="Every Sabbath"
        title="The week turns at sunset"
        body="Friday evening the campus slows down, and by Sabbath morning the whole family is together again."
      />

      <section className="px-6 py-20 pb-24 sm:px-12 lg:px-16">
        <FromBelow>
          <h2 className="font-display text-4xl font-extrabold text-gold">All programmes</h2>
        </FromBelow>
        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2">
          {events.map((e) => (
            <StaggerItem key={e.slug} className="glass-panel hover-lift overflow-hidden rounded-2xl">
              <Link to="/events/$slug" params={{ slug: e.slug }} className="group block">
                <div className="overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">{e.when}</p>
                  <h3 className="mt-2 font-display text-xl font-bold">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.summary}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </PageShell>
      <DriftBackdrop src={img.bgScripture} alt="Open Bible on a wooden desk">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">Always open</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight">
            Every programme starts and ends in the Word
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Dates and venues change every semester — the book we open never does.
          </p>
        </div>
      </DriftBackdrop>
    </PageShell>
  );
}
