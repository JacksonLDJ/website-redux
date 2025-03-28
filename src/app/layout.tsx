import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Liam Jackson | Portfolio",
  description: "Personal portfolio website of Liam Jackson - Senior ICT Technician and Cybersecurity Student",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <div className="test-static-css">
          This is a test of static CSS classes
        </div>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
