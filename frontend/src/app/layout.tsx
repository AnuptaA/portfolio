import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// const crimsonText = Crimson_Text({
//   variable: "--font-crimson-text",
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
// });

export const metadata: Metadata = {
  title: "Anupta Argo Portfolio",
  description:
    "This is Anupta Argo's personal website and contains descriptions of all of his experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
