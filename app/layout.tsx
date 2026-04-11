import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Ybunnn Blog",
  description: "My internship journey as an IT student at DOST Bicol",

  openGraph: {
    title: "Ybunnn Blog",
    description: "My internship journey as an IT student at DOST Bicol",
    url: "https://ybunnn-blog.vercel.app/", // change this later
    siteName: "Ybunnn Blog",
    images: [
      {
        url: "https://ybunnn-blog.vercel.app/og-image.jpg", // IMPORTANT
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is necessary here so Next.js doesn't complain about our script modifying the class list
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme Script to prevent FOUC (Flash of Unstyled Content) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${montserrat.className} font-sans antialiased bg-[#F4F4F4] dark:bg-gray-900 transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}