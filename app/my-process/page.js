import React from "react";
import MyProcess from "../components/process/MyProcess";

export const metadata = {
  title: "My Process",
  description:
    "How I build websites, from planning and design through development, launch, and the technical setup behind it, including hosting, domains, and email.",
  alternates: { canonical: "/my-process" },
};

export default function MyProcessPage() {
  return <MyProcess />;
}
