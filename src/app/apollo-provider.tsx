"use client"; // Must be a client component to use client-side state

import { ApolloProvider } from "@apollo/client";
import client from "@/lib/graphql/apollo-client";

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
