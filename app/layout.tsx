import "./globals.css";
import { Inter } from "next/font/google";
import StateManager from "./redux/Provider";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
 title: "deep learning",
 description: "...",
};
export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang="en">
   <StateManager>
    <body className={inter.className}>{children}</body>
   </StateManager>
  </html>
 );
}
