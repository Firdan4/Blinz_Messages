import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingProvider from "@/context/LoadingProvider";
import ToesterContext from "@/context/ToesterContext";
import getSession from "@/action/getSession";
import getCurrentUser from "@/action/getCurrentUser";
import { Provider } from "react-redux";
import { store } from "./libs/redux/store";
import AuthContext from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blinz Messager",
  description: "Media social App for your chating anyone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const curentUser = await getCurrentUser();
  console.log(curentUser);
  return (
    <html lang="en">
      <body className={`${inter.className} h-full bg-gray-100`}>
        <AuthContext>
          <ToesterContext />
          <LoadingProvider>{children}</LoadingProvider>
        </AuthContext>
      </body>
    </html>
  );
}
