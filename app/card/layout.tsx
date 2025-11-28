import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rebecca Forrest - Digital Business Card | Adapt Flow Deliver",
  description: "Contact Rebecca Forrest, Founder of Adapt Flow Deliver Consultancy Ltd. Delivery transformation specialist.",
  robots: "noindex, nofollow", // Don't index personal contact cards
};

export default function CardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
