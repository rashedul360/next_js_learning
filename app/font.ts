import { Fira_Code, Inter, Roboto_Mono } from "next/font/google";

export const inter = Inter({
 subsets: ["latin"],
 display: "swap",
});

export const roboto_mono = Roboto_Mono({
 subsets: ["latin"],
 display: "swap",
 variable: "--font-roboto-mono", // access this way roboto_mono.variable
});
export const fire_code = Fira_Code({
 subsets: ["latin"],
 display: "swap",
});
