import HomePage from "@/components/HomePage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` ${inter.className} bg-black`}
    >
    <HomePage/>
    </main>
  );
}
