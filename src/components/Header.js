import { GitHub, Light } from './Icon';

function Header() {
  return (
    <div>
      <div className="flex gap-3 flex-row-reverse text-sm">
        <div className="p-2 bg-black text-white">
          <Light />
        </div>
        <div className="p-2 bg-black text-white">
          <GitHub />
        </div>
        <div className="p-2 bg-black text-white">h.warunyu@gmail.com</div>
      </div>
      <div className="text-5xl mb-5 mt-8 font-[600]">Warunyu Hematulin</div>
      <div>Make impossible things possible with code</div>
      <div className="text-4xl my-4 font-[400]">👨‍💻 Web Developer</div>
      <div>Llam4u is a web developer and research engineer making impossible thing for the better world with code. He knows how to work as a team very well. He learns very fast and has ability of solving complex problems. He is a self-taught web developer who is seeking for new opportunity to follow his dream to become a greate web developer.</div>
    </div>
  )
}

export default Header;