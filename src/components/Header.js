import { useEffect, useState } from 'react';
import { GitHub, Light, LinkedIn } from './Icon';

const texts = ['Software Engineer', 'Frontend Developer', 'Web Developer'];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function Header() {
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
      <div className="flex gap-3 flex-row-reverse text-sm">
        <div className="p-2 bg-black text-white">
          <Light />
        </div>
        <div className="p-2 bg-black text-white">
          <GitHub />
        </div>
        <div className="py-2 px-3 bg-black text-white">
          <LinkedIn />
        </div>
        <div className="p-2 bg-black text-white">h.warunyu@gmail.com</div>
      </div>
      <div className="text-5xl mb-5 mt-8 font-[600]">Warunyu Hematulin</div>
      <div>Make impossible things possible with code</div>
      <div className="text-4xl my-3 font-[400] flex">
        <div className="mr-3">👨‍💻</div>
        <div>{typing}</div>
        <div className="type-cursor">|</div>
      </div>
      <div>Self-taught web developer and research engineer who likes making impossible thing for the better world with code. Now seeking to launch a career in web developer. Familiar with development and deployment process for many web developer frameworks specially in React and NextJS. Loves learning new technologies and solving problems by coding.</div>
    </div>
  )
}

export default Header;