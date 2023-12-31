import { Inter } from "next/font/google";
import "./globals.css";
import SidebarLayouts from "@/components/UI/SidebarLayouts/SidebarLayouts";
import FooterMain from "@/components/UI/Footer/FooterMain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Клуб Югра",
  description: "Лучший клуб единоборств в Сургуте",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarLayouts>{children}</SidebarLayouts>
        <FooterMain />
      </body>
    </html>
  );
}
