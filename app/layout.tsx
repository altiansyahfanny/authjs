import { auth } from "@/auth";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "AuthJs v5",
  description: "Created bt Altiansyah",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
