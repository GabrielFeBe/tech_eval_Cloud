import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Nav, NavLink} from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Avaliação técnica - Fullstack Developer",
  description: "Avaliação tecnica para vaga de desenvolvedor fullstack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="h-[65px] border-b-[#705A5A] border-b-[1px] flex justify-end items-center w-full fixed">
         <Nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/criar/filmes">Criar Filmes</NavLink>
          <NavLink href="/criar/atores">Criar Atores</NavLink>
         </Nav>
        </header>
        {children}
        <footer>

        </footer>
        </body>
    </html>
  );
}
