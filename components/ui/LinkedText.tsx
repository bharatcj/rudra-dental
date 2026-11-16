import type { ReactNode } from "react";
import Link from "next/link";

const SPLIT = /(\[[^\]]+\]\(\/[^)]+\))/g;
const PARSE = /^\[([^\]]+)\]\((\/[^)]+)\)$/;

export default function LinkedText({ text }: { text: string }) {
  const nodes: ReactNode[] = text.split(SPLIT).map((part, index) => {
    const match = part.match(PARSE);
    if (!match) return part;
    return (
      <Link
        key={index}
        href={match[2]}
        className="text-gold-300 underline underline-offset-4 transition hover:text-gold-200"
      >
        {match[1]}
      </Link>
    );
  });

  return <>{nodes}</>;
}
