import { useEffect, useState } from 'react';
import { GitHub, Moon, LinkedIn } from './Icon';

const texts = ['Software Engineer', 'Frontend Developer', 'Web Developer'];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function Header({ dark, setDark }) {
  const [typing, setTyping] = useState('');

  useEffect(() => {
    const typewriter = async () => {
      for (let x = 0; x < texts.length; x++) {
        const tArr = texts[x].split('');
        for (let i = 0; i < tArr.length; i++) {
          setTyping(texts[x].slice(0, i+1));
          await sleep(40);
        }
        await sleep(3000);
        if (x < texts.length-1) {
          for (let i = tArr.length; i >= 0; i--) {
            setTyping(texts[x].slice(0, i));
            await sleep(40);
          }
          await sleep(1000);
        }
      }
    }

    typewriter();
  }, []);

  return (
    <div>
      <div className="flex gap-3 flex-wrap flex-row-reverse text-sm">
        <div onClick={() => setDark(!dark)} className="p-2 bg-black dark:bg-white hover:shadow-lg hover:cursor-pointer">
          <Moon />
        </div>
        <a href="https://github.com/61130061" target="_blank" className="p-2 bg-black dark:bg-white hover:shadow-lg hover:cursor-pointer">
          <GitHub />
        </a>
        <a href="https://linkedin.com/in/h-warunyu" target="_blank" className="py-2 px-3 bg-black dark:bg-white hover:shadow-lg hover:cursor-pointer">
          <LinkedIn />
        </a>
        <a href="mailto: h.warunyu@gmail.com" className="p-2 bg-black dark:bg-white dark:text-black text-white hover:shadow-lg hover:cursor-pointer">h.warunyu@gmail.com</a>
      </div>
      <div className="text-5xl mb-5 mt-8 font-[600]">Warunyu Hematulin</div>
      <div>Make impossible things possible with code</div>
      <div className="sm:text-4xl my-3 sm:font-[400] flex text-2xl font-[500]">
        <div className="mr-3">👨‍💻</div>
        <div>{typing}</div>
        <div className="type-cursor">|</div>
      </div>
      <div>Self-taught web developer and research engineer who likes making impossible thing for the better world with code. Now seeking to launch a career in web developer. Familiar with development and deployment process for many web developer frameworks specially in React and NextJS. Loves learning new technologies and solving problems by coding.</div>
    </div>
  )
}

export default Header;