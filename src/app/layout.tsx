import "./globals.css";
import { ReactNode } from "react";
import { ApolloWrapper } from "./apollo-provider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>{/* Nav links */}</header>
        <ApolloWrapper>
          <main>{children}</main>
        </ApolloWrapper>
        <footer>{/* Footer */}</footer>
      </body>
    </html>
  );
}
