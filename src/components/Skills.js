function Skills () {
  return (
    <div className="my-12">
      <div className="text-4xl my-4 font-[400]">Skills</div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
        <div>
          <div className="font-[500] text-xl my-2">Language</div>
          <ul className="list-disc list-inside px-1">
            <li>Javascript</li>
            <li>Typescript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Swift</li>
          </ul>
        </div>
        <div>
          <div className="font-[500] text-xl my-2">Frontend</div>
          <ul className="list-disc list-inside px-1">
            <li>NodeJS</li>
            <li>ReactJS</li>
            <li>ThreeJS</li>
            <li>React Native</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div>
          <div className="font-[500] text-xl my-2">Backend</div>
          <ul className="list-disc list-inside px-1">
            <li>Rest API</li>
            <li>Next JS</li>
            <li>Prisma</li>
            <li>Mongodb</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills