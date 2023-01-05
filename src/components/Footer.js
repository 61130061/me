function Footer () {
  return (
    <div className="text-sm md:flex md:justify-between text-center md:text-normal w-full mt-20">
      <div className="my-5 md:m-0">Copyright ©2022 LLAM4U</div>
      <div className="flex justify-center divide-x">
        <a href="https://61130061.github.io/llam4u-terminal/" target="_blank" className="px-5 hover:cursor-pointer hover:underline">Terminal</a>
        <a href="https://github.com/61130061" target="_blank" className="px-5 hover:cursor-pointer hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/h-warunyu" target="_blank" className="px-5 hover:cursor-pointer hover:underline">LinkedIn</a>
        <a href="mailto: h.warunyu@gmail.com" className="px-5 hover:cursor-pointer hover:underline">Contact me</a>
      </div>
    </div>
  )
}

export default Footer;