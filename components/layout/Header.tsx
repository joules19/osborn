"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Phone, ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { NAV_ITEMS, COMPANY } from "@/lib/data";

type NavItem = (typeof NAV_ITEMS)[number];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top bar */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" aria-label="Osborn Transport Services home">
            <Image
              src="/logo.png"
              alt="Osborn Transport Services"
              width={180}
              height={52}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex items-center gap-6">
            <span className="hidden sm:block text-sm font-semibold text-[#1B3260] tracking-wide">
              {COMPANY.tagline}
            </span>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-[#0057A8] font-bold text-sm sm:text-lg hover:text-[#27AAE1] transition-colors"
              aria-label={`Call us on ${COMPANY.phone}`}
            >
              <Phone size={18} aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Desktop navigation */}
      <nav
        className="bg-[#0d1f3c]"
        aria-label="Main navigation"
        ref={dropdownRef}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Home icon */}
          <Link
            href="/"
            className="py-4 px-3 text-white hover:text-[#27AAE1] transition-colors"
            aria-label="Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
          </Link>

          <ul className="hidden lg:flex items-center" role="menubar">
            {NAV_ITEMS.map((item) => (
              <NavItemDesktop
                key={item.href}
                item={item}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
              />
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-4 hover:text-[#27AAE1] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-[108px] z-40 bg-[#0d1f3c] overflow-y-auto transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <nav className="px-4 py-6">
          <ul>
            <li>
              <Link
                href="/"
                className="flex items-center gap-2 py-3 px-2 text-white font-medium border-b border-white/10 hover:text-[#27AAE1]"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
            </li>
            {NAV_ITEMS.map((item) => (
              <MobileNavItem
                key={item.href}
                item={item}
                openSub={openMobileSub}
                setOpenSub={setOpenMobileSub}
                onClose={() => setMobileOpen(false)}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function NavItemDesktop({
  item,
  openDropdown,
  setOpenDropdown,
}: {
  item: NavItem;
  openDropdown: string | null;
  setOpenDropdown: (v: string | null) => void;
}) {
  const hasChildren = "children" in item && item.children && item.children.length > 0;
  const isOpen = openDropdown === item.href;

  return (
    <li role="none" className="relative group">
      {hasChildren ? (
        <button
          role="menuitem"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={() => setOpenDropdown(isOpen ? null : item.href)}
          className="flex items-center gap-1 py-4 px-3 text-white text-xs font-semibold uppercase tracking-wider hover:text-[#27AAE1] transition-colors whitespace-nowrap"
        >
          {item.label}
          <ChevronDown
            size={12}
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      ) : (
        <Link
          href={item.href}
          role="menuitem"
          className="flex items-center py-4 px-3 text-white text-xs font-semibold uppercase tracking-wider hover:text-[#27AAE1] transition-colors whitespace-nowrap"
        >
          {item.label}
        </Link>
      )}

      {/* Mega dropdown */}
      {hasChildren && isOpen && (
        <div className="absolute top-full left-0 min-w-[220px] bg-white shadow-xl border border-slate-100 rounded-b z-50">
          {"children" in item &&
            item.children?.map((child) => (
              <div key={child.href}>
                <Link
                  href={child.href}
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-3 text-sm font-semibold text-[#1B3260] hover:bg-[#EEF4FA] hover:text-[#0057A8] border-b border-slate-100 transition-colors"
                >
                  {child.label}
                </Link>
                {"children" in child &&
                  child.children?.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-center gap-1 pl-6 pr-4 py-2 text-xs text-slate-600 hover:bg-[#EEF4FA] hover:text-[#0057A8] transition-colors"
                    >
                      <ChevronRight size={10} aria-hidden="true" />
                      {sub.label}
                    </Link>
                  ))}
              </div>
            ))}
        </div>
      )}
    </li>
  );
}

function MobileNavItem({
  item,
  openSub,
  setOpenSub,
  onClose,
}: {
  item: NavItem;
  openSub: string | null;
  setOpenSub: (v: string | null) => void;
  onClose: () => void;
}) {
  const hasChildren = "children" in item && item.children && item.children.length > 0;
  const isOpen = openSub === item.href;

  return (
    <li className="border-b border-white/10">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          className="flex-1 py-3 px-2 text-white font-medium hover:text-[#27AAE1]"
          onClick={hasChildren ? undefined : onClose}
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            className="p-3 text-white hover:text-[#27AAE1]"
            onClick={() => setOpenSub(isOpen ? null : item.href)}
            aria-label={`${isOpen ? "Close" : "Open"} ${item.label} submenu`}
            aria-expanded={isOpen}
          >
            <ChevronDown
              size={16}
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
        )}
      </div>

      {hasChildren && isOpen && (
        <div className="bg-[#16304f] px-4 pb-2">
          {"children" in item &&
            item.children?.map((child) => (
              <div key={child.href}>
                <Link
                  href={child.href}
                  onClick={onClose}
                  className="block py-2 text-sm font-semibold text-[#27AAE1] hover:text-white"
                >
                  {child.label}
                </Link>
                {"children" in child &&
                  child.children?.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={onClose}
                      className="flex items-center gap-1 pl-4 py-1.5 text-xs text-slate-300 hover:text-white"
                    >
                      <ChevronRight size={10} aria-hidden="true" />
                      {sub.label}
                    </Link>
                  ))}
              </div>
            ))}
        </div>
      )}
    </li>
  );
}
