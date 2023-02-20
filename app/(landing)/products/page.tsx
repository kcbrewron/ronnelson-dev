export async function generateMetadata({ params, searchParams }) {
  return { title: "Products" };
}
async function getData(route: string) {
  const res = await fetch("https://api.example.com/...");

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default function Products() {
  return <h1>Products</h1>;
}
