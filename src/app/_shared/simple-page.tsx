import Link from "next/link";

type SimplePageProps = {
  title: string;
  body: string;
};

export default function SimplePage({ title, body }: SimplePageProps) {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-8">
      <article className="w-[min(760px,94vw)] border border-[#ddd] bg-white p-6">
        <h1 className="mt-0">{title}</h1>
        <p>{body}</p>
        <p>
          <Link className="underline underline-offset-2" href="/clone">
            Back to Clone Homepage
          </Link>
        </p>
      </article>
    </main>
  );
}
