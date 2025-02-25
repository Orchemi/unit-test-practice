import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unit Test Practice",
  description: "유닛 테스트 실습 공간",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
