import React from "react";
import "../globals.css"
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <main className="bg-neutral-50">{children}</main>
      </body>
    </html>
  );
}
