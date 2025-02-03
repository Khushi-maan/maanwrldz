import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankur Maan",
  description: "A passionate UI/UX Designer",
  openGraph: {
    images: ["/assets/png/meta.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
