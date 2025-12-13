"use client";

import { Timeline } from "@/lib/timeline";
import { projects } from "@/data/projectList";
import GithubContributionCalendar from "@/components/GithubContributions";

export default function Works() {
  return (
    <section className="mb-20">
      <Timeline data={projects} />
      <GithubContributionCalendar />
    </section>
  );
}
