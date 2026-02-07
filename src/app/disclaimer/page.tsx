import type { Metadata } from "next";
import SimplePage from "@/app/_shared/simple-page";

export const metadata: Metadata = {
  title: "Disclaimer",
};

export default function Page() {
  return <SimplePage title="Disclaimer" body="Placeholder legal page for the clone project." />;
}
