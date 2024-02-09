import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const roboto = Roboto({
  weight: ['400', '500', '700',],
  style: ["italic"],
  subsets: ['latin']
}
)

export const metadata: Metadata = {
  title: "expert notes ",
}
const duration = 60 * 30

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${roboto.className} bg-slate-900 text-slate-50 antialiased `}>
        <Toaster  duration={duration} richColors/>
        {children}
      </body>
    </html>
  );
}
