function Skills() {
  return (
    <div className="my-12">
      <div className="text-4xl my-4 font-[400]">Skills</div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
        <div>
          <div className="font-[500] text-xl my-2">Language</div>
          <ul className="list-disc list-inside px-1">
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Python</li>
            <li>Go</li>
          </ul>
        </div>
        <div>
          <div className="font-[500] text-xl my-2">Frontend</div>
          <ul className="list-disc list-inside px-1">
            <li>React</li>
            <li>NextJS</li>
            <li>Remix</li>
            <li>Flutter</li>
          </ul>
        </div>
        <div>
          <div className="font-[500] text-xl my-2">Backend</div>
          <ul className="list-disc list-inside px-1">
            <li>ExpressJS</li>
            <li>gRPC</li>
            <li>Protobuf</li>
          </ul>
        </div>
        <div>
          <div className="font-[500] text-xl my-2">Other</div>
          <ul className="list-disc list-inside px-1">
            <li>Kafka</li>
            <li>Odoo</li>
            <li>AWS</li>
            <li>Docker</li>
            <li>Gitlab CI/CD</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
