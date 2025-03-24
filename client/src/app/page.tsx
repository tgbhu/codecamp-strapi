import { BlockRenderer } from "@/components/BlockRenderer";
import { getHomePage } from "@/data/loaders";

async function loader(){
  const data = await getHomePage();
  if (!data) {
    return { notFound: true };
  }
  return { ...data.data };
}

export default async function HomeRoute() {
  const data = await loader();
  const blocks = data?.blocks || [];
  return (
    <BlockRenderer blocks={blocks} />
  );
}
