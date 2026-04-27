import Sidebar from "@/app/_components/Sidebar";
import React from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-[250px_1fr] ">

      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <main className="p-6 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}