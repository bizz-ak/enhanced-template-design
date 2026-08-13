import { Link } from "@tanstack/react-router";
import { BookOpen, GraduationCap, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

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
    label: "Ministries",
    children: [
      { to: "/ministries/music", label: "Music & Choir" },
      { to: "/ministries/prayer", label: "Prayer Bands" },
      { to: "/ministries/outreach", label: "Outreach" },
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

const spring = { type: "spring", stiffness: 320, damping: 20 } as const;

export function SiteSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full shrink-0 border-border lg:sticky lg:top-0 lg:h-screen lg:w-[340px] lg:overflow-y-auto lg:border-l"
      style={{ background: "var(--gradient-sidebar)" }}
    >
      <div className="flex min-h-full flex-col gap-6 px-6 py-8">
        <div className="flex items-center justify-center gap-4">
          {[BookOpen, GraduationCap].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.15, rotate: i === 0 ? -8 : 8 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 },
                default: spring,
              }}
              className="grid size-14 place-items-center rounded-full border border-gold/50 bg-surface-2"
            >
              <Icon className="size-6 text-gold" aria-hidden />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-panel rounded-xl px-5 py-4 text-center"
        >
          <p className="font-display text-lg font-bold tracking-widest">TUCASA</p>
          <p className="mt-1 text-xs font-medium text-gold">Nyerere Campus UDSM</p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto mt-3 h-px w-16 origin-center bg-gold/60"
          />
        </motion.div>

        <nav className="flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.06 }}
            >
              <motion.div whileHover={{ x: -6 }} transition={spring}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="group flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-semibold transition-colors duration-300 hover:border-gold/50 hover:bg-surface-2 data-[status=active]:border-gold/60 data-[status=active]:text-gold"
                >
                  <span className="underline-sweep inline-block">{link.label}</span>
                  {link.children && (
                    <ChevronRight className="size-4 text-gold/60 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  )}
                </Link>
              </motion.div>
              {link.children && (
                <div className="mt-1 flex flex-col border-l border-sidebar-border pl-3">
                  {link.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="rounded px-2 py-1.5 text-xs text-muted-foreground transition-colors hover:text-gold data-[status=active]:text-gold"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </nav>

        <div className="mt-auto space-y-3 border-t border-sidebar-border pt-6">
          <p className="text-center text-[11px] font-semibold tracking-[0.2em] text-muted-foreground">
            JOIN OUR COMMUNITY
          </p>
          <motion.button
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm font-semibold hover:border-gold/50 hover:bg-surface-2"
          >
            Login
          </motion.button>
          <Link to="/join" className="block">
            <motion.span
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={spring}
              className="block w-full rounded-lg px-4 py-3 text-center text-sm font-bold text-gold-foreground"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              Join TUCASA Today
            </motion.span>
          </Link>
          <p className="pt-2 text-center text-xs italic text-muted-foreground">
            "Living the Mission, Reaching the Nations"
          </p>
        </div>
      </div>
    </motion.aside>
  );
}
