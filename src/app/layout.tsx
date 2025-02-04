import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import ReactQueryProvider from "@/Providers/ReactQueryProvider";
import { ThemeProvider } from "@/Providers/ThemeProvider";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={nunitoSans.variable}
      suppressHydrationWarning={true}
    >
      <body className="bg-theme-background font-sans h-dvh overflow-hidden grid grid-rows-[auto_1fr] text-theme-text ">
        <ThemeProvider>
          <ReactQueryProvider>
            <Header />
            <div className="max-w-screen-2xl mx-auto h-full overflow-auto">
              {children}
            </div>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
