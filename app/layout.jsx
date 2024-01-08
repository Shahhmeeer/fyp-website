import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plant_E | Shop Plants Hassle Free",
  description: "Plantation Store for sales and purchase of plants and related products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
