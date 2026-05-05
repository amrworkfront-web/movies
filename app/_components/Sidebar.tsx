"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Film,
  List,
  X,
} from "lucide-react";

const Links = [
  { name: "Dashboard", href: "/admin/", icon: LayoutDashboard },
  { name: "Movies", href: "/admin/movies", icon: Film },
  { name: "Categories", href: "/admin/categories", icon: List },
];


export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

<aside
  className={`
    fixed md:sticky
    top-0 left-0
    w-64
    h-screen
    bg-surface-high text-white
    py-6 px-3
    z-50
    overflow-y-auto
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
  `}
>
        {/* Close button (mobile) */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="text-xl font-bold">Navigation</h2>
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <nav>
          <ul className="space-y-2">
            {Links.map((link) => {
              const isActive =
                pathname === link.href ||
                pathname.startsWith(link.href + "/");

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)} // يقفل بعد الضغط
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
    </>
  );
}