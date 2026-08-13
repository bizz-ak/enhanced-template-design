import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ScrollGallery, AssembleImage, ShatterImage, FromBelow } from "@/components/motion/ScrollFx";
import { img, galleryImages } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | TUCASA Nyerere Campus UDSM" },
      {
        name: "description",
        content:
          "Photos from TUCASA Nyerere Campus: worship, choir, Bible study, outreach, baptisms, health expos and fellowship.",
      },
      { property: "og:title", content: "TUCASA Photo Gallery" },
      { property: "og:description", content: "A year of worship, service and friendship in pictures." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Gallery"
        title="A year in pictures"
        subtitle="Scroll slowly — the story of our campus family unfolds frame by frame."
        image={img.fellowship}
        imageAlt="Students sharing a fellowship meal"
      />

      <AssembleImage src={img.baptism} alt="Baptism at sunrise" caption="Baptism Sabbath" />

      <ScrollGallery images={galleryImages} />

      <ShatterImage src={img.campusAerial} alt="Aerial view of campus" caption="Nyerere Campus, UDSM" />

      <section className="px-6 py-20 pb-24 sm:px-12 lg:px-16">
        <FromBelow>
          <h2 className="font-display text-4xl font-extrabold text-gold">Full album</h2>
        </FromBelow>
        <Stagger className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {galleryImages.map((g) => (
            <StaggerItem key={g.label} className="glass-panel hover-lift mb-6 overflow-hidden rounded-2xl">
              <figure className="group">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <figcaption className="px-5 py-4 text-sm font-semibold text-gold">{g.label}</figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </PageShell>
  );
}
