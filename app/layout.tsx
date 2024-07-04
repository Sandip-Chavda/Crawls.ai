import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import ModalProvider from "@/providers/modal-provider";
import { Suspense } from "react";
import Loading from "@/components/auth/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crawls - Real time collaboration tool | miro.com clone",
  description:
    "Crawls is a versatile online collaboration tool designed for teams to create and share digital whiteboards. Foster creativity, streamline planning, and collaborate effortlessly in real-time, regardless of your team's location. Start visualizing ideas with Crawls today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <ModalProvider />
            {children}
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
