import type { Metadata } from "next";
import { Pinyon_Script } from "next/font/google";
import "./globals.css";

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon-script",
});

export const metadata: Metadata = {
  title: "Practicality x Creativity",
  description: "An editorial design showcase about intuitive design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pinyonScript.variable}>
      <body>{children}</body>
    </html>
  );
}
