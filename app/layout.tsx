import type { Metadata } from "next";
import PaletteProvider from "./PaletteProvider";
import "./globals.css";
import { CssBaseline } from "@mui/material";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const metadata: Metadata = {
  title: "PersianCCBook",
  description: "CC Books",
  openGraph: {
    title: "PersianCCBook",
    description: "CC Books",
  },
};

// const queryClient = new QueryClient();

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
          {/* <QueryClientProvider client={queryClient}> */}
            <main id="root">{children}</main>
          {/* </QueryClientProvider> */}
          <Footer />
        </PaletteProvider>
      </body>
    </html>
  );
}
