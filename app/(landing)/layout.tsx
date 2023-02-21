import { Suspense } from "react";
{
  /* @ts-expect-error Server Component */
}
export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}></Suspense>
      {children}
    </section>
  );
}
