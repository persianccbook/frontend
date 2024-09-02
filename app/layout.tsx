import type { Metadata } from "next";
import { Palette } from "./Palette";
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
        <Palette>
          <CssBaseline />
          <NavBar />
          <main id="root">{children}</main>
          <Footer />
        </Palette>
      </body>
    </html>
  );
}
