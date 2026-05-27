"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Truck,
  ClipboardCheck,
  Shield,
  Monitor,
  Wind,
  Wrench,
  MapPin,
  BadgeCheck,
  Hammer,
  Gauge,
  AlertTriangle,
  Leaf,
  Car,
  ListChecks,
  Clock,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  truck: Truck,
  "clipboard-check": ClipboardCheck,
  shield: Shield,
  monitor: Monitor,
  wind: Wind,
  wrench: Wrench,
  "map-pin": MapPin,
  "badge-check": BadgeCheck,
  hammer: Hammer,
  gauge: Gauge,
  "alert-triangle": AlertTriangle,
  leaf: Leaf,
  car: Car,
  "list-checks": ListChecks,
  clock: Clock,
};

interface SubNavItem {
  label: string;
  href: string;
  icon: string;
}

interface ServiceSubNavProps {
  items: SubNavItem[];
  parentLabel: string;
}

export default function ServiceSubNav({
  items,
  parentLabel,
}: ServiceSubNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className="bg-[#EEF4FA] border-b border-slate-200 overflow-x-auto"
      aria-label={`${parentLabel} sub-navigation`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <ul className="flex gap-1 py-1" role="list">
          {items.map((item) => {
            const Icon = ICON_MAP[item.icon] ?? Wrench;
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wide transition-all rounded-t whitespace-nowrap ${
                    isActive
                      ? "bg-white text-[#0057A8] border-b-2 border-[#0057A8]"
                      : "text-[#1B3260] hover:text-[#0057A8] hover:bg-white/60"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon size={14} aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
