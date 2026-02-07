import type { Metadata } from "next";
import SimplePage from "@/app/_shared/simple-page";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Page() {
  return <SimplePage title="Blog" body="This is the blog index for the Lilac clone. In the original template, this is a separate page." />;
}
