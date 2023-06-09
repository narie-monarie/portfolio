import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({
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
      <body className={nunito.className} data-theme="dark">
        <div className="flex flex-col h-screen justify-between">
          <NavBar data-theme="light" />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
