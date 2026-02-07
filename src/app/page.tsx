import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assignment Home",
};

export default function HomeSelectorPage() {
  return (
    <main className="grid min-h-screen place-items-center p-8 bg-[radial-gradient(circle_at_15%_-10%,rgba(29,90,98,0.14),transparent_34%),radial-gradient(circle_at_90%_10%,rgba(207,123,83,0.14),transparent_30%),#f5f2eb]">
      <section className="w-[min(920px,94vw)] border border-[#d7ddd7] bg-[#fffdf8] p-[clamp(1.4rem,3vw,2.5rem)]">
        <p className="m-0 text-[0.8rem] uppercase tracking-[0.14em]">
          Grow My Therapy Assignment
        </p>
        <h1 className="mt-2 mb-0 leading-[1.1]">Stage 2 Submission Views</h1>
        <p className="max-w-[66ch]">
          Open the exact Lilac homepage clone for Part 1, or open the Dr. Maya
          Reynolds redesign for Part 2.
        </p>

        <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          <Link
            href="/clone"
            className="block border border-[#1d5a62] bg-white p-4 font-bold text-[#1d5a62] no-underline"
          >
            Part 1: Clone
            <span className="mt-1.5 block font-medium text-[#3c5255]">
              Lilac homepage UI replication
            </span>
          </Link>

          <Link
            href="/redesign"
            className="block border border-[#123f45] bg-[#1d5a62] p-4 font-bold text-[#f8fffe] no-underline"
          >
            Part 2: Redesign
            <span className="mt-1.5 block font-medium text-[#d8ecef]">
              Dr. Maya Reynolds therapy website
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
