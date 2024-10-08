import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AuthJs v5",
  description: "Created bt Altiansyah",
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
