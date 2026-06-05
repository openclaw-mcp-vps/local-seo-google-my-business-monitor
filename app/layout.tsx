import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GMB Monitor — Track Your Google My Business Listing & Competitors",
  description: "Monitor Google My Business listing changes, track competitors, and get alerts on ranking drops with actionable optimization suggestions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bfbc0964-003c-4d98-a026-14c54a6fabe6"></script>
      </head>
      <body style={{ backgroundColor: "#0d1117", color: "#c9d1d9", fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
