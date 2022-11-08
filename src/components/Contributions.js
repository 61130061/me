import { Star } from './Icon';

const data = [
  {
    name: "tinacms",
    lang: "TypeScript",
    content: [
      "Fix list items overflow outside text editor",
      "Improve the indent of list item style"
    ],
    star: "8.1 k",
  },
  {
    name: "carbon",
    lang: "TypeScript",
    content: [
      "Redesign and update new pattern of pagenation bar",
    ],
    star: "6.1 k",
  },
]

function Contributions () {
  return (
    <div className="my-12">
      <div className="text-4xl my-4 font-[400]">Contributions</div>
      <div className="grid sm:grid-cols-2 gap-5">
        {data.map((d, i) => 
        <div key={i} className="flex flex-col flex-1 justify-between p-3 rounded-lg border">
          <div>
            <div className="text-lg font-[500] mb-1 hover:underline hover:cursor-pointer">{d.name}</div>
            <ul className="list-disc pl-6">
              {d.content.map((dc, ic) => 
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
                <div>{d.star}</div>
              </div>
            </div>
            {/*
            <div>
              <div>fix bugs</div>
            </div>
              */}
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Contributions;