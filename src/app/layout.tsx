import type { Metadata } from "next";
import { Oxanium, Montserrat } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium',
})

const monterrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})


export const metadata: Metadata = {
  title: "devstage.dev",
  description: "Site de indicações de conteúdo para eventos de tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oxanium.variable} ${monterrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
