import type { Metadata } from "next";
import SimplePage from "@/app/_shared/simple-page";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return <SimplePage title="Home" body="This route is provided because the original footer links to /home." />;
}
