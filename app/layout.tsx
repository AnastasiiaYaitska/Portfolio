import "./main.css";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data from "./data/data.json";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { aboutMeData, pages, ContactMeLinks } = data;
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header name={aboutMeData.name} pages={pages} />
        <main className=" sm:mb-32 mb-16">{children}</main>
        <ToastContainer />
        <Footer contactMeLinks={ContactMeLinks} />
      </body>
    </html>
  );
}
