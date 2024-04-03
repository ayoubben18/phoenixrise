import type { Metadata } from "next";
import { Roboto } from "@next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"


const roboto = Roboto({
    weight: ["400"],
    style: ["normal"],
    subsets:['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
        {children}
    </ThemeProvider>
    </body>
    </html>
  );
}
