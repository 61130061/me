"use client";

import { useState, useEffect } from "react";
import { Star } from "~/components/icon";

type ProjectsProps = {
  data: {
    owner: string;
    repo: string;
  }[];
};

export const Projects: React.FC<ProjectsProps> = (props) => {
  const [data, setData] = useState<{
    name: string;
    lang: string;
    stars: number;
    desc: string;
    link: string;
  }[]>();

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
          desc: data.description,
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
        <div className="text-4xl my-4 font-[400]">Projects</div>
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
      <div className="text-4xl my-4 font-[400]">Projects</div>
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
              <div className="text-sm">{d.desc}</div>
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
        <div className="h-[20px] w-[40%] rounded-full bg-slate-200 mb-3 hover:underline hover:cursor-pointer" />
        <div className="w-full h-[20px] mb-3 rounded-full bg-slate-200"></div>
        <div className="w-[70%] h-[20px] mb-3 rounded-full bg-slate-200"></div>
      </div>
      <div className="flex justify-between mt-3 text-sm">
        <div className="flex items-center gap-5">
          <div className="w-[60px] h-[20px] rounded-full bg-slate-200"></div>
          <div className="w-[60px] h-[20px] rounded-full bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
};
