import { Suspense } from "react";

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
