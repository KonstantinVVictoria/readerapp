import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import { FirebaseAuthProvider } from "@/lib/auth/firebase";
import Overlay from "@/components/Overlay/Overlay";

const font = Nunito({ subsets: ["latin"], variable: "--main-font" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Overlay />
        <FirebaseAuthProvider>{children}</FirebaseAuthProvider>
      </body>
    </html>
  );
}
