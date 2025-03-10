"use client";
import { useState } from "react";

type TimelineProps = {
  data: {
    date: string;
    title: string;
    company: string;
    list: string[];
  }[];
};

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="my-12">
      <div className="text-4xl my-4 font-[400]">Professional Experience</div>
      <div
        className={`relative pl-8 ${expanded ? "" : "max-h-[420px] overflow-hidden"}`}
      >
        <div
          className={"relative border-s border-stone-400 dark:border-zinc-500"}
        >
          <ol className="relative">
            {data.map((d, i) => (
              <li key={`${d}-${i}`} className="mb-8 ms-4">
                <div className="absolute w-3 h-3 bg-stone-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-zinc-900 dark:bg-zinc-700"></div>
                <time className="mb-1 text-sm font-normal leading-none">
                  {d.date}
                </time>
                <h3 className="text-xl font-semibold text-zine-900 dark:text-white">
                  {d.title}
                </h3>
                <p>{d.company}</p>
                <ul className="mt-2 mb-4 text-base list-disc ml-6">
                  {d.list.map((l, i) => (
                    <li key={`${l}-${i}`}>{l}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent flex justify-center items-end">
            <button
              className="text-xs bg-black text-white dark:bg-white dark:text-black p-2"
              onClick={() => setExpanded(true)}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
