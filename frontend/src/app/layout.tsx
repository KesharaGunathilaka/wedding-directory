import type { Metadata } from "next";
import ApolloWrapper from "@/apollo/ApolloWrapper";
import { montserrat, merriweather, montez } from "@/assets/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Say I Do",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
   
        <link rel="icon" href="/favicon.ico" />
      
      <body
        className={`${montserrat.variable} ${merriweather.variable} ${montez.variable}`}
      >
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
        
      </body>
    </html>
  );
}
