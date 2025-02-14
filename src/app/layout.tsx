import type { Metadata } from "next";
import "./globals.css";
import { url } from "inspector";

export const metadata: Metadata = {
  title: "Ankur Maan",
  description: "A passionate UI/UX Designer",
  openGraph: {
    images: [{ url: "https://ibb.co/NPRnZVf" }],
    videos: [
      {
        url: "https://nextjs.org/video.mp4", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
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
