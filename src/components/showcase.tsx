"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ShowcaseProps = {
  data: {
    link: string;
    image: string;
    title: string;
    description: string;
  }[];
  show: number;
};

export const Showcase: React.FC<ShowcaseProps> = ({ data, show }) => {
  const [more, setMore] = useState(false);

  return (
    <div className="my-12">
      <div className="text-4xl my-4 font-[400]">Showcase</div>
      <div className="grid sm:grid-cols-2 gap-5">
        {data.slice(0, show).map((v, i) => (
          <Link
            key={`${v} - ${i}`}
            className="flex flex-col flex-1 group"
            href="/showcase/1"
          >
            <Image
              className="rounded-t-lg border-gray-300 border-x border-t dark:border-gray-600 dark:group-hover:border-gray-400 group-hover:border-gray-400"
              src={v.image}
              alt={v.title}
              width={500}
              height={300}
            />
            <div className="flex flex-col flex-1 p-3 rounded-b-lg border-gray-300 border-x border-b dark:border-gray-600 dark:group-hover:border-gray-400 group-hover:border-gray-400">
              <div className="font-semibold group-hover:underline">
                {v.title}
              </div>
              <div className="text-sm">{v.description}</div>
            </div>
          </Link>
        ))}
        {more &&
          data.slice(show).map((v, i) => (
            <Link
              key={`${v} - ${i}`}
              className="flex flex-col flex-1 group"
              href="/showcase/1"
            >
              <Image
                className="rounded-t-lg border-gray-300 border-x border-t dark:border-gray-600 dark:group-hover:border-gray-400 group-hover:border-gray-400"
                src={v.image}
                alt={v.title}
                width={500}
                height={300}
              />
              <div className="flex flex-col flex-1 p-3 rounded-b-lg border-gray-300 border-x border-b dark:border-gray-600 dark:group-hover:border-gray-400 group-hover:border-gray-400">
                <div className="font-semibold group-hover:underline">
                  {v.title}
                </div>
                <div className="text-sm">{v.description}</div>
              </div>
            </Link>
          ))}
      </div>
      {!more && (
        <div className="flex justify-center mt-10 text-xs">
          <button
            onClick={() => setMore(true)}
            className="bg-black text-white dark:bg-white dark:text-black p-2"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};
