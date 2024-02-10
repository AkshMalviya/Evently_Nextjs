import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Poppins({
    subsets: ["latin"],
    weight:['400','500','600', '700'],
    variable:'--font-poppins'
});

export const metadata: Metadata = {
  title: "Evently",
  description: "Event Management app",
  icons:"/assests/images/logo.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <html lang="en">
        <body className={inter.variable}>{children}</body>
        </html>
    </ClerkProvider>
  );
}
