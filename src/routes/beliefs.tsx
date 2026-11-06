import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { PinnedScene } from "@/components/motion/ScrollFx";
import { TextMaskImage, FixedBackdrop } from "@/components/motion/BackdropFx";
import { img } from "@/data/site";

export const Route = createFileRoute("/beliefs")({
  head: () => ({
    meta: [
      { title: "What We Believe | TUCASA Nyerere Campus" },
      {
        name: "description",
        content:
          "The core Seventh-day Adventist beliefs that shape TUCASA Nyerere Campus: Scripture, the Trinity, salvation, the Sabbath and the second coming.",
      },
      { property: "og:title", content: "What TUCASA Believes" },
      { property: "og:description", content: "Bible-based convictions that anchor our student community." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BeliefsPage,
});

function BeliefsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our faith"
        title="What we believe"
        subtitle="Our convictions come from Scripture alone, shared with the worldwide Seventh-day Adventist Church."
        image={img.bibleStudy}
        imageAlt="Students studying the Bible together"
      />

      <PinnedScene
        src={img.worship}
        alt="Students in worship"
        eyebrow="Sola Scriptura"
        title="The Bible is our only creed"
        lines={[
          "We test every teaching, tradition and opinion against the written Word.",
          "We study honestly — questions are welcome, and answers are searched out together.",
          "What we believe shapes how we live, study and serve.",
        ]}
      />

      <TextMaskImage
        src={img.bgStainedGlass}
        text="TRUTH"
        sub="Twenty-eight fundamental beliefs, one living Christ at the centre of them all."
      />

      <FixedBackdrop src={img.bgScripture} alt="Open Bible in warm light">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">Sola scriptura</p>
          <blockquote className="mt-6 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            &ldquo;Thy word is a lamp unto my feet, and a light unto my path.&rdquo;
          </blockquote>
          <p className="mt-5 text-sm font-semibold tracking-widest text-muted-foreground">
            PSALM 119:105
          </p>
        </div>
      </FixedBackdrop>

    </PageShell>
  );
}
