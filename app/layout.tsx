import type { Metadata } from "next";
import PaletteProvider from "./PaletteProvider";
import "./globals.css";
import { CssBaseline } from "@mui/material";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "PersianCCBook",
  description: "CC Books",
  openGraph: {
    title: "PersianCCBook",
    description: "CC Books",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <GoogleAnalyticsScript />
      <body>
        <PaletteProvider>
          <CssBaseline />
          <NavBar />
          <main id="root">{children}</main>
          <Footer />
        </PaletteProvider>
      </body>
    </html>
  );
}
