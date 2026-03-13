"use client";

import { useEffect, useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { SlQuestion } from "react-icons/sl";
import { TbApi, TbApiApp, TbSql } from "react-icons/tb";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
};

export default function Home() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(
        "https://api.github.com/users/cultofthemantis/repos",
      );

      const data = await response.json();

      const sorted = data
        .sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6);

      setRepos(sorted);
    }

    fetchRepos();
  }, []);

const skills = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "JavaScript", icon: FaJs },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript},
  { name: "SQL", icon:TbSql},
  { name: "REST APIs", icon: TbApi},
];

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-black text-white font-serif">
      <div className="text-center py-24 px-6">
        <h1 className="font-bold mb-4 bg-linear-to-r from-purple-100 to-white-900 bg-clip-text text-transparent ">
          Kellen Dixon
        </h1>

        <p className="fullstack-text text-5xl text-cyan-200">Full Stack Developer</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-20">
        <div className="sponge-container backdrop-blur-lg bg-black/60 border-b-cyan-700 rounded-2xl p-10  drop-shadow-2xl hover:scale-115  transition shadow-lg hover:shadow-cyan-500/30">
          <h2 className="text-3xl font-bold mb-6 text-cyan-500 justify-center text-center">About Me</h2>

          <p className="sponge-text leading-relaxed text-purple-100 font-serif">
            I'm a Junior Software Developer currently enrolled at CodeStack
            Academy in Stockton, CA. I consider myself versatile and can work
            confidently in both the frontend and the backend. I personally enjoy
            the backend logic side of development and prioritize making
            everything fit together as easily and efficiently as possible
            wherever I can. During projects I try to keep everything as
            streamlined as I can so I can make things easier for both myself and
            my team in order to accomplish the task at hand.
          </p>
          <div className="spongepic">
            <img
              src="./spunchbog.jpg"
              alt="Kellen Dixon"
              className="spunchbob rounded-xl border border-purple-400 shadow-lg"
            />
          </div>
        </div>

 <div>
  <h2 className="text-5xl font-bold mb-8 text-center text-cyan-500">
    Skills
  </h2>

  <div className="flex flex-wrap justify-center gap-4">
    {skills.map((skill, index) => {
      const Icon = skill.icon;

      return (
        <div
          key={index}
          className="flex items-center gap-3 px-5 py-2 rounded-full text-3xl bg-cyan-700/40 border border-purple-400/40 hover:scale-105 transition shadow-lg hover:shadow-purple-400"
        >
          <Icon />
          {skill.name}
        </div>
      );
    })}
  </div>
</div>

        <div>
          <h2 className="text-3xl font-bold mb-10 text-center text-cyan-400">
            GitHub Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
              <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              className="group bg-neutral-900 border border-blue-500/30 p-6 rounded-xl hover:scale-105 transition shadow-lg hover:shadow-cyan-500/30"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-500">
                  {repo.name}
                </h3>

                <p className="text-sm text-purple-200 mb-5">
                  {repo.description || "Click to visit page"}
                </p>

                <div className="flex justify-between text-sm text-purple-300">
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>{repo.language}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 bg-purple-150 border-t border-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-8 text-purple-300">Contact</h2>

          <div className="space-y-4 text-lg text-purple-200">
              <p>
                {" "}
                <a
                  href="./resume.pdf"
                  target="_blank"
                  className="underline   hover:text-purple-400"
                >
                  View Resume
                </a>
              </p>
            <p> (209) 627-9046</p>

            <p>
              {" "}
              <a
                href="mailto:kellendixon2007@gmail.com"
                className="hover:text-purple-400"
              >
                kellendixon2007@gmail.com
              </a>
            </p>

            <p>
              {" "}
              <a
                href="https://www.linkedin.com/in/kellen-dixon-5626243aa/"
                target="_blank"
                className="hover:text-purple-400"
              >
                LinkedIn
              </a>
            </p>

            <p>
              {" "}
              <a
                href="https://github.com/cultofthemantis"
                target="_blank"
                className="hover:text-purple-400"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
