import { notFound } from "next/navigation";

export default async function Docu({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  // Ensure params is awaited
  const slug = params.slug;

  if (slug?.length === 1) {
    return <h1>Viewing {slug[0]}</h1>;
  } else if (slug?.length === 2) {
    return (
      <h1>
        Viewing {slug[0]} of {slug[1]}
      </h1>
    );
  }

  // Trigger a 404 page
  notFound();
}
