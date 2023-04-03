import React, { useState } from 'react';

import ascom from '../gif/ascom-showcase.gif';
import terminal from '../gif/terminal-showcase.gif';
import htmlCrack from '../gif/html-crack-showcase.gif';
import stap from '../gif/3stap-showcase.gif';

export default function Showcase() {
  const [more, setMore] = useState(false);

  return (
    <div className="my-12">
      <div className="text-4xl my-4 font-[400]">Showcase</div>
      <div className="grid sm:grid-cols-2 gap-5">
        <a className="flex flex-col flex-1 group" href="https://61130061.github.io/ascom-web/" target="_blank">
          <img className="rounded-t-lg border-x border-t dark:border-gray-600 dark:group-hover:border-gray-400 group-hover:border-gray-400" src={ascom} />
          <div className="flex flex-col flex-1 p-3 rounded-b-lg border-x border-b dark:border-gray-600 dark:group-hover:border-gray-400 group-hover:border-gray-400">
            <div className="font-semibold group-hover:underline">ASCOM Laboratory</div>
            <div className="text-sm">Develop prototype versions of laboratory website for university using ThreeJS, React, and Docusaurus.</div>
          </div>
        </a>
        <a className="flex flex-col flex-1 group" href="https://61130061.github.io/3stap/" target="_blank">
          <img className="rounded-t-lg border-x border-t dark:border-gray-600 dark:group-hover:border-gray-400 group-hover:border-gray-400" src={stap} />
          <div className="flex flex-col flex-1 p-3 rounded-b-lg border-x border-b dark:border-gray-600 dark:group-hover:border-gray-400 group-hover:border-gray-400">
            <div className="font-semibold group-hover:underline">3STAP</div>
            <div className="text-sm">Realtime 3d Satellite's Trajectory and Position Tracking web application built by ReactJS and ThreeJS</div>
          </div>
        </a>
        {more &&
          <>
            <a className="flex flex-col flex-1 group" href="https://61130061.github.io/llam4u-terminal/" target="_blank">
              <img className="rounded-t-lg border-x border-t dark:border-gray-600 dark:group-hover:border-gray-400 group-hover:border-gray-400" src={terminal} />
              <div className="flex flex-col flex-1 p-3 rounded-b-lg border-x border-b dark:border-gray-600 dark:group-hover:border-gray-400 group-hover:border-gray-400">
                <div className="font-semibold group-hover:underline">Terminal Portfolio</div>
                <div className="text-sm">Realistic terminal React portfolio website with standard shell command onboard.</div>
              </div>
            </a>
            <a className="flex flex-col flex-1 group" href="https://61130061.github.io/HTMLCrack/" target="_blank">
              <img className="rounded-t-lg border-x border-t dark:border-gray-600 dark:group-hover:border-gray-400 group-hover:border-gray-400" src={htmlCrack} />
              <div className="flex flex-col flex-1 p-3 rounded-b-lg border-x border-b dark:border-gray-600 dark:group-hover:border-gray-400 group-hover:border-gray-400">
                <div className="font-semibold group-hover:underline">HTML Crack</div>
                <div className="text-sm">React web app that can help your visualize HTML code as tree chart.</div>
              </div>
            </a>
          </>
        }
      </div>
      {!more &&
        <div className="flex justify-center mt-10 text-xs">
          <button onClick={() => setMore(true)} className="bg-black text-white dark:bg-white dark:text-black p-2">Show More</button>
        </div>
      }
    </div>
  )
}