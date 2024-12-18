import { Inter } from "next/font/google";
import AdminMenu from "../../components/AdminMenu"
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
      <div className={inter.className}>
        <AdminMenu/>
        <main className="pt-5 max-w-5xl mx-auto px-6 md:px-12 xl:px-6"> 
          {children} 
        </main>
      </div>
  );
}
