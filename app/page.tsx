"use client";

import { useEffect, useState } from "react";

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
        "https://api.github.com/users/cultofthemantis/repos"
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
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind",
    "C#",
    ".NET",
    "REST APIs",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-black text-white font-serif">

      
      <section className="text-center py-24 px-6">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-100 to-black-950 bg-clip-text text-transparent stroke-3">
          Kellen Dixon
        </h1>

        <p className="text-xl text-purple-200">
          Full Stack Developer
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 space-y-20">

        <section className="backdrop-blur-lg bg-black/60 border-black rounded-2xl p-10  drop-shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-purple-300">
            About Me
          </h2>

          <p className="text-lg leading-relaxed text-purple-100 font-serif">
            I'm a Junior Software Developer currently enrolled at CodeStack
            Academy in Stockton, CA. I consider myself versatile and can work
            confidently in both the frontend and the backend. I personally
            enjoy the backend logic side of development and prioritize making
            everything fit together as easily and efficiently as possible
            wherever I can. During projects I am always trying to optimize my
            code wherever I can.
          </p>
        </section>

       
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-300">
            Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-2 rounded-full bg-purple-700/40 border border-purple-400/40 hover:bg-purple-600/60 transition shadow-md"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

      
        <section>
          <h2 className="text-3xl font-bold mb-10 text-center text-purple-300">
            GitHub Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                className="group bg-neutral-900 border border-blue-500/30 p-6 rounded-xl hover:scale-105 transition shadow-lg hover:shadow-purple-500/30"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300">
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
        </section>

      </div>

   
      <section className="mt-24 bg-purple-950 border-t border-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-3xl font-bold mb-8 text-purple-300">
            Contact
          </h2>

          <div className="space-y-4 text-lg text-purple-200">

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
      </section>

    </main>
  );
}