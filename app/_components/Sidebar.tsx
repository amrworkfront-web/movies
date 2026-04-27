"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Film,
  List,
} from "lucide-react";

const Links = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Movies", href: "/movies", icon: Film },
  { name: "Categories", href: "/categories", icon: List },
];

export default function Sidebar() {
  const pathname = usePathname();
return (
    <aside className="w-64 h-screen bg-surface-high text-white py-6 px-3">
      <h2 className="text-xl font-bold mb-6">Navigation</h2>

      <nav>
        <ul className="space-y-2">
          {Links.map((link) => {
            const isActive =  pathname === link.href || pathname.startsWith(link.href + "/");

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 p-2.5 rounded-sm transition
                    ${
                      isActive
                        ? "bg-primary-container/70 text-white"
                        : "hover:bg-surface-low text-gray-300"
                    }
                  `}
                >
                  <link.icon size={20} />
                  <span>{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}