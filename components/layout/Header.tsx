"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { mainNav } from "@/lib/navigation";
import type { NavItem } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, item: NavItem) {
  if (item.href === "/") return pathname === "/";
  if (pathname === item.href || pathname.startsWith(`${item.href}/`)) return true;
  return Boolean(item.children?.some((child) => child.href.split("#")[0] === pathname));
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close any open menus after navigation.
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Prevent the page behind the mobile menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500",
        scrolled || mobileOpen
          ? "border-white/[0.07] bg-ink-950/85 shadow-[0_18px_40px_-24px_rgb(0_0_0/0.7)] backdrop-blur-xl"
          : "border-white/[0.05] bg-ink-950",
      )}
    >
      <div className="mx-auto flex h-[80px] w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8">
        <Logo tone="dark" />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) =>
              item.children ? (
                <DesktopDropdown
                  key={item.label}
                  item={item}
                  active={isActive(pathname, item)}
                  open={openMenu === item.label}
                  setOpen={(value) => setOpenMenu(value ? item.label : null)}
                />
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item) ? "page" : undefined}
                    className={navLinkClass(isActive(pathname, item))}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href="/contact" variant="accent" size="sm" arrow>
              Book a Consultation
            </ButtonLink>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white ring-1 ring-white/15 transition hover:bg-white/10 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>

    {/* Rendered outside <header>: its backdrop-filter would otherwise become the containing block for this fixed panel. */}
    <AnimatePresence>
      {mobileOpen && <MobileMenu pathname={pathname} onNavigate={() => setMobileOpen(false)} />}
    </AnimatePresence>
    </>
  );
}

function navLinkClass(active: boolean) {
  return cn(
    "relative inline-flex h-10 items-center rounded-full px-3.5 text-[0.92rem] font-medium tracking-[-0.005em] transition-colors",
    "after:absolute after:bottom-0.5 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rotate-45 after:bg-gold-400 after:transition-opacity",
    active ? "text-white after:opacity-100" : "text-ink-200/80 hover:text-white after:opacity-0",
  );
}

function DesktopDropdown({
  item,
  active,
  open,
  setOpen,
}: {
  item: NavItem;
  active: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const panelId = useId();
  const wrapperRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    },
    [open, setOpen],
  );

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open, setOpen]);

  useEffect(() => cancelClose, []);

  const isServices = (item.children?.length ?? 0) > 4;

  return (
    <li
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onKeyDown={onKeyDown}
      onBlur={(event) => {
        if (!wrapperRef.current?.contains(event.relatedTarget as Node)) setOpen(false);
      }}
    >
      <div className="flex items-center">
        <Link
          href={item.href}
          aria-current={active ? "page" : undefined}
          className={cn(navLinkClass(active), "pr-1.5")}
        >
          {item.label}
        </Link>
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${open ? "Hide" : "Show"} ${item.label} menu`}
          onClick={() => setOpen(!open)}
          className="inline-flex h-8 w-6 items-center justify-center rounded-md text-ink-200/60 transition hover:text-white"
        >
          <ChevronDown
            aria-hidden="true"
            className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-4"
          >
            <div
              className={cn(
                "overflow-hidden rounded-3xl border border-white/10 bg-ink-900/95 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8)] backdrop-blur-xl",
                isServices ? "w-[620px]" : "w-[400px]",
              )}
            >
              <ul className={cn("grid gap-1 p-3", isServices && "grid-cols-2")}>
                {item.children?.map((child) => {
                  const Icon = child.icon;
                  return (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-white/[0.05]"
                      >
                        {Icon && (
                          <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-gold-400 ring-1 ring-gold-400/20 transition-colors group-hover:bg-gold-400 group-hover:text-ink-950 group-hover:ring-gold-400">
                            <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                          </span>
                        )}
                        <span className="min-w-0">
                          <span className="block text-[0.93rem] font-medium text-white">
                            {child.label}
                          </span>
                          {child.description && (
                            <span className="mt-0.5 block text-[0.83rem] leading-snug text-ink-200/70">
                              {child.description}
                            </span>
                          )}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {isServices && (
                <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-6 py-3.5">
                  <p className="text-[0.83rem] text-ink-200/60">Scope is defined with each client.</p>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-gold-400 hover:text-white"
                  >
                    View all services <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function MobileMenu({ pathname, onNavigate }: { pathname: string; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <motion.div
      id="mobile-menu"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-[80px] bottom-0 z-40 overflow-y-auto border-t border-white/10 bg-ink-950 lg:hidden"
    >
      <nav aria-label="Mobile" className="mx-auto flex min-h-full max-w-7xl flex-col px-5 pt-4 pb-8 sm:px-6">
        <ul className="divide-y divide-white/10">
          {mainNav.map((item) => {
            const active = isActive(pathname, item);
            if (!item.children) {
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between py-4 font-display text-2xl font-medium",
                      active ? "text-gold-400" : "text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }
            const isOpen = expanded === item.label;
            const groupId = `mobile-${item.label.toLowerCase()}`;
            return (
              <li key={item.label}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={groupId}
                  onClick={() => setExpanded(isOpen ? null : item.label)}
                  className={cn(
                    "flex w-full items-center justify-between py-4 font-display text-2xl font-medium",
                    active ? "text-gold-400" : "text-white",
                  )}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn("h-5 w-5 text-ink-200/60 transition-transform", isOpen && "rotate-180")}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      id={groupId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <li>
                        <Link
                          href={item.href}
                          onClick={onNavigate}
                          className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-gold-400"
                        >
                          {item.label === "Services" ? "All services" : "Specialties overview"}
                          <ArrowRight aria-hidden="true" className="h-4 w-4" />
                        </Link>
                      </li>
                      {item.children
                        .filter((child) => child.href !== item.href)
                        .map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={onNavigate}
                              className="block rounded-lg px-3 py-2.5 text-[0.95rem] text-ink-200 hover:bg-white/5 hover:text-white"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      <li aria-hidden="true" className="h-3" />
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto pt-8">
          <ButtonLink href="/contact" onClick={onNavigate} variant="accent" size="lg" arrow className="w-full">
            Book a Consultation
          </ButtonLink>
          <p className="mt-4 text-center text-sm text-ink-200/60">
            Revenue, guarded. Healthcare RCM for U.S. providers.
          </p>
        </div>
      </nav>
    </motion.div>
  );
}
