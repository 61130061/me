import { useEffect, useState } from 'react';
import { Star } from './Icon';

const link = [
  {
    owner: "tinacms",
    repo: "tinacms",
    content: [
      "Fix list items overflow outside text editor",
      "Improve the indent of list item style"
    ],
    tags: [ 'fix bug' ]
  },
  {
    owner: "carbon-design-system",
    repo: "carbon",
    content: [
      "Redesign and update new pattern of pagenation bar",
    ],
    tags: [ 'code', 'design' ]
  }
]

function Contributions () {
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
          desc: link[i].content,
          tags: link[i].tags,
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
      <div className="text-4xl my-4 font-[400]">Contributions</div>
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
      <div className="text-4xl my-4 font-[400]">Contributions</div>
      <div className="grid sm:grid-cols-2 gap-5">
        {gData.map((d, i) => 
        <div key={i} className="flex flex-col flex-1 justify-between p-3 rounded-lg border">
          <div>
            <div className="text-lg font-[500] mb-1 hover:underline hover:cursor-pointer">{d.name}</div>
            <ul className="list-disc pl-6">
              {d.desc.map((dc, ic) => 
              <li key={ic}>{dc}</li>
              )}
            </ul>
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

function Skeleton() {
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
  )
}

export default Contributions;