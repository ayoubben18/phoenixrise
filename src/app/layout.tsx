import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/NavigationMenuDemo";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: "PhoenixRise",
    template: "%s | PhoenixRise",
  },
  description: "Digital Services agency",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          roboto.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
