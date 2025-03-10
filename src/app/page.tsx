"use client";

import Link from "next/link";

import { Contributions } from "~/components/contibutions";
import { Header } from "~/components/header";
import { HireMeButton } from "~/components/hire-me-button";
import { Projects } from "~/components/projects";
import { Showcase } from "~/components/showcase";
import { contributions, footer, projects, showcases, skills, texts } from "~/data";

export default function Home() {
  return (
    <div className="p-8 bg-white dark:bg-zinc-950 dark:text-white">
      <div className="m-auto max-w-[720px] mt-5 min-h-screen">
        <Header texts={texts} />

        <div className="my-12">
          <div className="text-4xl my-4 font-[400]">Skills</div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
            {Object.entries(skills).map(([key, value]) => (
              <div key={key + value}>
                <div className="font-[500] text-xl my-2">{key}</div>
                <ul className="list-disc list-inside px-1">
                  {value.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Showcase show={2} data={showcases} />

        <Contributions data={contributions} />

        <Projects data={projects} />

        <HireMeButton />

        <div className="text-sm md:flex md:justify-between text-center md:text-normal w-full mt-20">
          <div className="my-5 md:m-0">{footer.text}</div>
          <div className="flex justify-center divide-x">
            {footer.links.map((l, i) => (
              <Link
                key={`${l.name}-${i}`}
                href={l.url}
                target="_blank"
                className="px-5 hover:cursor-pointer hover:underline"
              >
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
