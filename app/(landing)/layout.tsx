import { Suspense } from "react";

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
