"use client";

import { useEffect, useState } from "react";

import { Star } from "~/components/icon";

type ContributionsProps = {
  data: {
    owner: string;
    repo: string;
    content: string[];
    tags: string[];
  }[];
};

export const Contributions: React.FC<ContributionsProps> = (props) => {
  const [data, setData] = useState<
    {
      name: string;
      lang: string;
      stars: number;
      desc: string[];
      tags: string[];
      link: string;
    }[]
  >();

  useEffect(() => {
    const load = async () => {
      const newArr = [];
      const link = props.data;
      for (let i = 0; i < link.length; i++) {
        const res = await fetch(
          `https://api.github.com/repos/${link[i].owner}/${link[i].repo}`
        );
        const data = await res.json();
        newArr.push({
          name: data.name,
          lang: data.language,
          stars: data.stargazers_count,
          desc: link[i].content,
          tags: link[i].tags,
          link: data.html_url,
        });
      }
      setData(newArr);
    };

    if (!data) load();
  }, [data, props.data]);

  if (!data) {
    return (
      <div className="my-12">
        <div className="text-4xl my-4 font-[400]">Contributions</div>
        <div className="grid sm:grid-cols-2 gap-5">
          {props.data.map((d, i) => (
            <Skeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="my-12">
      <div className="text-4xl my-4 font-[400]">Contributions</div>
      <div className="grid sm:grid-cols-2 gap-5">
        {data.map((d, i) => (
          <div
            key={i}
            className="flex flex-col flex-1 justify-between p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:hover:border-gray-400 hover:border-gray-400"
          >
            <div>
              <a
                href={d.link}
                target="_blank"
                className="text-lg font-[500] mb-1 hover:underline hover:cursor-pointer"
              >
                {d.name}
              </a>
              <ul className="list-disc text-sm pl-6">
                {d.desc.map((dc, ic) => (
                  <li key={ic}>{dc}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between mt-3 text-sm">
              <div className="flex items-center gap-5">
                <div className="flex gap-2 items-center">
                  <div>{"</>"}</div>
                  <div>{d.lang}</div>
                </div>
                <div className="flex gap-2 items-center">
                  <Star />
                  <div className="pt-1">{d.stars}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="animate-pulse flex flex-col flex-1 justify-between p-3 rounded-lg border">
      <div>
        <div className="h-[20px] w-[30%] bg-slate-200 rounded-full mb-4 hover:underline hover:cursor-pointer" />
        <div className="h-[18px] w-[80%] bg-slate-200 rounded-full ml-6 my-3" />
        <div className="h-[18px] w-[50%] bg-slate-200 rounded-full ml-6 my-3" />
      </div>
      <div className="flex justify-between mt-3 text-sm">
        <div className="flex items-center gap-5">
          <div className="h-[18px] w-[80px] bg-slate-200 rounded-full" />
          <div className="h-[18px] w-[80px] bg-slate-200 rounded-full" />
        </div>
      </div>
    </div>
  );
};
