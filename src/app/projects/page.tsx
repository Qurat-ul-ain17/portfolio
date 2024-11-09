import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <div className="bg-orange-300 w-screen h-screen flex items-center justify-center">
      <div className="bg-orange-400 border border-orange-600 shadow-2xl w-[60%] h-[60%] relative rounded-xl p-5 text-center">
          <h2 className="text-5xl font-bold mb-32">PROJECTS</h2>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <Image
              src="/images/typescript.png"
              alt="typescript"
              height={80}
              width={250}
              className="rounded-lg"
            />
            <a href="https://github.com/Qurat-ul-ain17/45-Ques-Assignment.git" target="_blank" rel="noopener noreferrer">
            <p className="hover:text-orange-50 text-lg font-semibold">TYPESCRIPT</p>
            </a>
          </div>
          <div className="flex flex-col items-center rounded-lg">
            <Image
              src="/images/hakathon.png"
              alt="hakathon"
              height={100}
              width={250}
              className="rounded-lg"
            />
            <a href="https://github.com/Qurat-ul-ain17/hackathon-milestones.git" target="_blank" rel="noopener noreferrer">
            <p className="hover:text-orange-50 font-semibold text-lg">HAKATHON</p>
            </a>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/Nextjs-Image.webp"
              alt="Next.Js"
              height={100}
              width={250}
              className="rounded-lg"
            />
            <a>
            <p className="hover:text-orange-50 font-semibold text-lg">NEXT.JS</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;