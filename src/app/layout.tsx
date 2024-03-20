import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "./ApolloWrapper";
import { AgentProvider } from "src/context/AgentContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Evveland AI Platform | A complete AI automation platform on the Metaverse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ApolloWrapper>
        <body className={inter.className}>{children}</body>
      </ApolloWrapper>
    </html>
  );
}
