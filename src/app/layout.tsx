import "./globals.css";
import { Orbitron } from "next/font/google";
import { ThemeProvider } from "next-themes";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["600", "700"] });

export const metadata = {
  title: "Re:Play — Rewind the Future",
  description: "A retro-futurist Walkman experience built in Expo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${orbitron.className} bg-replay-bg text-white`}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
