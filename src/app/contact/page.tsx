import type { Metadata } from "next";
import SimplePage from "@/app/_shared/simple-page";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Page() {
  return (
    <SimplePage
      title="Contact"
      body="Thanks for your interest. This assignment includes a placeholder contact route for navigation from the homepage views."
    />
  );
}
