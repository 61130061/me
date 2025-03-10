"use client";

import { useEffect, useState } from "react";

import { sleep } from "~/utiles";
import { Moon, LinkedIn, GitHub } from "~/components/icon";
import { useTheme } from "next-themes";

type HeaderProps = {
  texts: string[];
};

export const Header: React.FC<HeaderProps> = ({ texts }) => {
  const [typing, setTyping] = useState("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const typewriter = async () => {
      for (let x = 0; x < texts.length; x++) {
        const tArr = texts[x].split("");
        for (let i = 0; i < tArr.length; i++) {
          setTyping(texts[x].slice(0, i + 1));
          await sleep(40);
        }
        await sleep(3000);
        if (x < texts.length - 1) {
          for (let i = tArr.length; i >= 0; i--) {
            setTyping(texts[x].slice(0, i));
            await sleep(40);
          }
          await sleep(1000);
        }
      }
    };

    typewriter();
  }, [texts]);

  return (
    <div>
      <div className="flex gap-3 flex-wrap flex-row-reverse text-sm">
        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 bg-black dark:bg-white hover:shadow-lg hover:cursor-pointer"
        >
          <Moon />
        </div>
        <a
          href="https://github.com/61130061"
          target="_blank"
          className="p-2 bg-black dark:bg-white hover:shadow-lg hover:cursor-pointer"
        >
          <GitHub />
        </a>
        <a
          href="https://linkedin.com/in/h-warunyu"
          target="_blank"
          className="py-2 px-3 bg-black dark:bg-white hover:shadow-lg hover:cursor-pointer"
        >
          <LinkedIn />
        </a>
        <a
          href="mailto: h.warunyu@gmail.com"
          className="p-2 bg-black dark:bg-white dark:text-black text-white hover:shadow-lg hover:cursor-pointer"
        >
          h.warunyu@gmail.com
        </a>
      </div>
      <div className="text-5xl mb-5 mt-8 font-[600]">Warunyu Hematulin</div>
      <div>Make impossible things possible with code</div>
      <div className="sm:text-4xl my-3 sm:font-[400] flex text-2xl font-[500]">
        <div className="mr-3">👨‍💻</div>
        <div>{typing}</div>
        <div className="type-cursor">|</div>
      </div>
      <div>
        Software engineer with rapid career growth, excelling in developing
        full-stack web application{" "}
        <span className="font-semibold">(Python, React, Flutter)</span> and have
        experience in scalable micro-services{" "}
        <span className="font-semibold">(Go, gRPC, Kafka)</span>. Potential for
        leading high-impact projects and deliver high quality product.
        Passionate about AI, cloud, and open-source innovation.
      </div>
    </div>
  );
};
