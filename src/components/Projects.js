import { useState, useEffect } from 'react';
import { Star } from './Icon';

const link = [
  {
    owner: "61130061",
    repo: "NERDTree"
  },
  {
    owner: "61130061",
    repo: "DockBar"
  },
  {
    owner: "61130061",
    repo: "Tailbook"
  },
  {
    owner: "61130061",
    repo: "react-emoji-selectors"
  },
  {
    owner: "61130061",
    repo: "dora"
  },
]

function Projects () {
  const [gData, setGData] = useState(null);

  useEffect(() => {
    const load = async () => {
      const newArr = [];
      for (let i = 0; i < link.length; i++) {
        const res = await fetch(`https://api.github.com/repos/${link[i].owner}/${link[i].repo}`)
        const data = await res.json();
        newArr.push({
          name: data.name,
          lang: data.language,
          stars: data.stargazers_count,
          desc: data.description,
          link: data.html_url
        });
      }
      setGData(newArr);
    }

    if (!gData) load();
  }, []);

  if (!gData) {
    return (
      <div className="my-12">
        <div className="text-4xl my-4 font-[400]">Projects</div>
        <div className="grid sm:grid-cols-2 gap-5">
          {link.map((d, i) =>
            <Skeleton key={i} />
          )}
        </div>
      </div>

    )
  }

  return (
    <div className="my-12">
      <div className="text-4xl my-4 font-[400]">Projects</div>
      <div className="grid sm:grid-cols-2 gap-5">
        {gData.map((d, i) =>
          <div key={i} className="flex flex-col flex-1 justify-between p-3 rounded-lg border">
            <div>
              <a href={d.link} target="_blank" className="text-lg font-[500] mb-1 hover:underline hover:cursor-pointer">{d.name}</a>
              <div className="text-sm">{d.desc}</div>
            </div>
            <div className="flex justify-between mt-3 text-sm">
              <div className="flex items-center gap-5">
                <div className="flex gap-2 items-center">
                  <div>{'</>'}</div>
                  <div>{d.lang}</div>
                </div>
                <div className="flex gap-2 items-center">
                  <Star />
                  <div className="pt-1">{d.stars}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Skeleton () {
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
  )
}

export default Projects;