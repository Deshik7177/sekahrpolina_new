
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Upgrido — Ultimate Editing Cohort | Sekhar Polina",
  description: "Join Upgrido — the Ultimate 90-Day Video Editing Cohort by Sekhar Polina. Learn A to Z editing, storytelling, monetisation & personal branding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{ scrollBehavior: 'smooth' }}>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
