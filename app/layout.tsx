import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";
import { Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const sora = Sora({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Created By Job Monari",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto flex flex-col h-screen justify-between">
            <NavBar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
