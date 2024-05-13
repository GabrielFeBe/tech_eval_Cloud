import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Avaliação técnica - Fullstack Developer",
  description: "Avaliação tecnica para vaga de desenvolvedor fullstack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>

        </header>
        {children}
        <footer>

        </footer>
        </body>
    </html>
  );
}
