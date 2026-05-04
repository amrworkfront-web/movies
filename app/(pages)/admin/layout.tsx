"use client";

import Sidebar from "@/app/_components/Sidebar";
import React, { useState } from "react";
import { Menu } from "lucide-react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex">

      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Content */}
      <div className="flex-1">
        
        {/* Topbar (mobile only) */}
        <div className="md:hidden p-4 border-b flex items-center">
          <button onClick={() => setOpen(true)}>
            <Menu />
          </button>
        </div>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}