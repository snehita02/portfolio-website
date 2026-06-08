import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Snehita Bharata — AI Engineer & Software Developer",
  description:
    "Portfolio of Snehita Bharata — AI Engineer, Data Engineer, and Software Developer specializing in intelligent systems, agentic AI, and scalable data pipelines.",
  keywords: [
    "AI Engineer",
    "Data Engineer",
    "Software Developer",
    "LangChain",
    "RAG",
    "Machine Learning",
    "Full Stack",
    "Snehita Bharata",
  ],
  authors: [{ name: "Snehita Bharata" }],
  creator: "Snehita Bharata",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snehitabharata.dev",
    title: "Snehita Bharata — AI Engineer & Software Developer",
    description:
      "Building AI Systems, Data Pipelines, and Intelligent Automation.",
    siteName: "Snehita Bharata Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snehita Bharata — AI Engineer & Software Developer",
    description:
      "Building AI Systems, Data Pipelines, and Intelligent Automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <TooltipProvider delayDuration={300}>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
