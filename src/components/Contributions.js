import { Star } from './Icon';

function Contributions () {
  return (
    <div className="my-12">
      <div className="text-4xl my-4 font-[400]">Contributions</div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col flex-1 justify-between p-3 rounded-lg border">
          <div>
            <div className="text-lg font-[500] mb-1 hover:underline hover:cursor-pointer">tinacms</div>
            <ul className="list-disc pl-6">
              <li>Fix list items overflow outside text editor</li>
              <li>Improve the indent of list item style</li>
            </ul>
          </div>
          <div className="flex justify-between mt-3 text-sm">
            <div className="flex items-center gap-5">
              <div className="flex gap-2 items-center">
                <div>{'</>'}</div>
                <div>Typescript</div>
              </div>
              <div className="flex gap-2 items-center">
                <Star />
                <div>8k</div>
              </div>
            </div>
            <div>
              <div>fix bugs</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-between p-3 rounded-lg border">
          <div>
            <div className="text-lg font-[500] mb-1 hover:underline hover:cursor-pointer">carbon</div>
            <ul className="list-disc pl-6">
              <li>Redesign and update new pattern of pagenation bar</li>
            </ul>
          </div>
          <div className="flex justify-between mt-3 text-sm">
            <div className="flex items-center gap-5">
              <div className="flex gap-2 items-center">
                <div>{'</>'}</div>
                <div>Typescript</div>
              </div>
              <div className="flex gap-2 items-center">
                <Star />
                <div>8k</div>
              </div>
            </div>
            <div>
              <div>design, fix bugs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contributions;