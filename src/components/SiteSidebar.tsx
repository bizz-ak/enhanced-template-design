import { Link } from "@tanstack/react-router";
import { BookOpen, GraduationCap } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About TUCASA" },
];

export function SiteSidebar() {
  return (
    <aside
      className="w-full shrink-0 border-border lg:sticky lg:top-0 lg:h-screen lg:w-[360px] lg:border-l"
      style={{ background: "var(--gradient-sidebar)" }}
    >
      <div className="flex h-full flex-col gap-6 px-6 py-8">
        <div className="flex items-center justify-center gap-4">
          <div className="grid size-16 place-items-center rounded-full border border-gold/50 bg-surface-2 transition-transform duration-300 hover:scale-110">
            <BookOpen className="size-7 text-gold" aria-hidden />
          </div>
          <div className="grid size-16 place-items-center rounded-full border border-gold/50 bg-surface-2 transition-transform duration-300 hover:scale-110">
            <GraduationCap className="size-7 text-gold" aria-hidden />
          </div>
        </div>

        <div className="glass-panel rounded-xl px-5 py-4 text-center">
          <p className="font-display text-lg font-bold tracking-widest">TUCASA</p>
          <p className="mt-1 text-xs font-medium text-gold">Nyerere Campus UDSM</p>
          <div className="mx-auto mt-3 h-px w-16 bg-gold/60" />
        </div>

        <nav className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="group rounded-lg border border-border bg-surface px-4 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-surface-2 data-[status=active]:border-gold/60 data-[status=active]:text-gold"
            >
              <span className="underline-sweep inline-block">{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto space-y-3 border-t border-sidebar-border pt-6">
          <p className="text-center text-[11px] font-semibold tracking-[0.2em] text-muted-foreground">
            JOIN OUR COMMUNITY
          </p>
          <button className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-surface-2">
            Login
          </button>
          <button
            className="w-full rounded-lg px-4 py-3 text-sm font-bold text-gold-foreground transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
          >
            Join TUCASA Today
          </button>
          <p className="pt-2 text-center text-xs italic text-muted-foreground">
            "Living the Mission, Reaching the Nations"
          </p>
        </div>
      </div>
    </aside>
  );
}
