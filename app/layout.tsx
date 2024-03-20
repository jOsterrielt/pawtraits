import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs'

const montserrat = Montserrat({
   subsets: ["latin"],
  weight: ["400", "500", "600", "700"],  
  variable: "--font-montserrat"
  }); 

export const metadata: Metadata = {
  title: "Pawtraits",
  description: "AI pawtrait generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5' }
    }} >
    <html lang="es">
      <body className={cn("font-montserrat antialiased", montserrat.variable)}>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
