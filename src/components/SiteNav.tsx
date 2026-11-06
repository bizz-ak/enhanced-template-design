import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, BookOpen } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type NavItem = { to: string; label: string; children?: { to: string; label: string }[] };

const navLinks: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/about",
    label: "About TUCASA",
    children: [
      { to: "/about/history", label: "Our History" },
      { to: "/about/mission", label: "Mission & Vision" },
      { to: "/about/leadership", label: "Leadership" },
    ],
  },
  { to: "/beliefs", label: "What We Believe" },
  {
    to: "/ministries",
    label: "Departments",
    children: [
      { to: "/ministries/kiroho", label: "Spiritual Affairs" },
      { to: "/ministries/muziki", label: "Music (Choir)" },
      { to: "/ministries/mawasiliano", label: "Communication" },
      { to: "/ministries/afya", label: "Health" },
    ],
  },
  {
    to: "/events",
    label: "Events",
    children: [
      { to: "/events/friday-vespers", label: "Friday Vespers" },
      { to: "/events/sabbath-worship", label: "Sabbath Worship" },
      { to: "/events/campus-crusade", label: "Campus Crusade" },
    ],
  },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const spring = { type: "spring", stiffness: 320, damping: 24 } as const;

export function SiteNav() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/70 backdrop-blur-md"
      style={{ background: "var(--gradient-sidebar)" }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-5 py-3 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full border border-gold/50 bg-surface-2">
            <BookOpen className="size-5 text-gold" aria-hidden />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-extrabold tracking-widest">TUCASA</span>
            <span className="block text-[10px] font-medium text-gold">Nyerere Campus UDSM</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.to}
              className="relative"
              onMouseEnter={() => setOpenKey(link.to)}
              onMouseLeave={() => setOpenKey(null)}
            >
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="group flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-300 hover:text-gold data-[status=active]:text-gold"
              >
                <span className="underline-sweep inline-block">{link.label}</span>
                {link.children && (
                  <ChevronDown
                    className={`size-3.5 text-gold/70 transition-transform duration-300 ${
                      openKey === link.to ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                )}
              </Link>

              <AnimatePresence>
                {link.children && openKey === link.to && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 6, filter: "blur(6px)" }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3"
                  >
                    <div className="glass-panel overflow-hidden rounded-xl border border-border p-2">
                      {link.children.map((c, i) => (
                        <motion.div
                          key={c.to}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.04 * i, ...spring }}
                        >
                          <Link
                            to={c.to}
                            className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface-2 hover:text-gold data-[status=active]:text-gold"
                          >
                            {c.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <Link to="/join" className="ml-3">
            <motion.span
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={spring}
              className="block rounded-lg px-4 py-2.5 text-sm font-bold text-gold-foreground"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              Join TUCASA
            </motion.span>
          </Link>
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className="ml-auto grid size-10 place-items-center rounded-lg border border-border bg-surface lg:hidden"
        >
          {mobileOpen ? <X className="size-5 text-gold" /> : <Menu className="size-5 text-gold" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <div key={link.to}>
                  <div className="flex items-center">
                    <Link
                      to={link.to}
                      activeOptions={{ exact: link.to === "/" }}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 rounded-lg px-2 py-2.5 text-sm font-semibold data-[status=active]:text-gold"
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <button
                        type="button"
                        aria-label={`Toggle ${link.label} submenu`}
                        onClick={() => setMobileSub((k) => (k === link.to ? null : link.to))}
                        className="grid size-9 place-items-center rounded-lg border border-border"
                      >
                        <ChevronDown
                          className={`size-4 text-gold transition-transform ${
                            mobileSub === link.to ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {link.children && mobileSub === link.to && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-l border-border pl-3"
                      >
                        {link.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded px-2 py-2 text-xs text-muted-foreground hover:text-gold data-[status=active]:text-gold"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link to="/join" onClick={() => setMobileOpen(false)} className="mt-3">
                <span
                  className="block rounded-lg px-4 py-3 text-center text-sm font-bold text-gold-foreground"
                  style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
                >
                  Join TUCASA Today
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
