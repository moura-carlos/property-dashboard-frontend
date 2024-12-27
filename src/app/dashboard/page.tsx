"use client";
import { useQuery } from "@apollo/client";
import { GET_PROPERTIES } from "@/lib/graphql/queries";

export default function DashboardPage() {
  const { data, loading, error } = useQuery(GET_PROPERTIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      {data.properties?.map((prop: any) => (
        <div key={prop.id}>
          <p>
            {prop.name} - {prop.address}
          </p>
        </div>
      ))}
    </div>
  );
}
