import Image from "next/image";
import ProjectCard from "@/components/projectCard";
import * as React from "react";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="mx-10">
      <Header />
      <ProjectCard />

    </main>
  );
}
