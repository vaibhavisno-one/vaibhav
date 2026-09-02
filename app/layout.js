import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
});
const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400","500"],
});

export const metadata = {
  title: "Vaibhav OS — Portfolio",
  description: "OS-like portfolio of Vaibhav Kumar — Full Stack Developer",
  icons: { icon: "/favico.png" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} antialiased bg-[#0f0f12] text-zinc-100 overflow-hidden dark`}>
        {children}
      </body>
    </html>
  );
}
