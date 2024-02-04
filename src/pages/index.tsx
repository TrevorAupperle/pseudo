import Head from "next/head";
import rocket from "public/lotties/rocket.json";
import { PostCard } from "~/components/Post";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export type Post = {
  id: string;
  title: string;
  body: string;
  author: string;
  datePublished: Date;
  dateLastModified: Date;
  impact: number;
  views: number;
  tags: string[];
  communityForum: Comment[];
  professionalForum: Comment[];
};

export type Comment = {
  text: string;
  author: string;
  datePosted: Date;
};
// sort on views
const mockPosts: Post[] = [
  {
    id: "1",
    title: "How to get started with React",
    body: "React is a JavaScript library for building user interfaces. Learn what React is all about on the official website.",
    author: "John Doe",
    datePublished: new Date("2021-09-01"),
    dateLastModified: new Date("2021-09-01"),
    impact: 100,
    views: 1000,
    tags: ["React", "JavaScript", "Frontend"],
    communityForum: [
      {
        text: "I'm having trouble with the useState hook",
        author: "Jane Doe",
        datePosted: new Date("2021-09-01"),
      },
    ],
    professionalForum: [],
  },
  {
    id: "2",
    title: "TypeScript Type Assertions and Type Guards",
    body: "This is a mock post about Mastering Generics in TypeScript...",
    author: "Pat Myback",
    datePublished: new Date(2023, 10, 13, 2, 8, 45),
    dateLastModified: new Date(2023, 10, 16, 9, 37, 14),
    impact: 20,
    views: 6507,
    tags: ["Angular", "Vue"],
    communityForum: [],
    professionalForum: [],
  },

  {
    id: "3",
    title: "TypeScript in Node.js: Best Practices",
    body: "This is a mock post about Building a REST API with TypeScript and Express...",
    author: "Chris P. Bacon",
    datePublished: new Date(2023, 11, 25, 10, 25, 5),
    dateLastModified: new Date(2023, 12, 7, 13, 33),
    impact: 40,
    views: 2722,
    tags: ["Node.js", "Programming", "JavaScript", "React", "Vue"],
    communityForum: [],
    professionalForum: [],
  },

  {
    id: "4",
    title: "Effective TypeScript: Tips and Tricks",
    body: "This is a mock post about Migrating to TypeScript: A Step-by-Step Guide...",
    author: "Robin Banks",
    datePublished: new Date(2023, 7, 7, 7, 26, 18),
    dateLastModified: new Date(2023, 10, 27, 23, 51, 27),
    impact: 96,
    views: 4792,
    tags: ["React", "Angular", "TypeScript", "Testing", "Vue"],
    communityForum: [],
    professionalForum: [],
  },

  {
    id: "5",
    title: "TypeScript and Vue: Building Robust Applications",
    body: "This is a mock post about TypeScript Type Assertions and Type Guards...",
    author: "Chris P. Bacon",
    datePublished: new Date(2023, 11, 29, 17, 25, 45),
    dateLastModified: new Date(2023, 12, 23, 22, 23, 12),
    impact: 14,
    views: 6467,
    tags: ["Async Programming", "Functional Programming", "TypeScript"],
    communityForum: [],
    professionalForum: [],
  },

  {
    id: "6",
    title: "Understanding TypeScript for Beginners",
    body: "This is a mock post about TypeScript Type Assertions and Type Guards...",
    author: "Chris P. Bacon",
    datePublished: new Date(2023, 3, 22, 21, 39, 19),
    dateLastModified: new Date(2023, 10, 26, 5, 51, 18),
    impact: 33,
    views: 5462,
    tags: ["Programming", "Web Development", "Functional Programming", "React"],
    communityForum: [],
    professionalForum: [],
  },

  {
    id: "7",
    title: "TypeScript and React: A Comprehensive Guide",
    body: "This is a mock post about TypeScript and React: A Comprehensive Guide...",
    author: "Pat Myback",
    datePublished: new Date(2023, 10, 29, 8, 47, 35),
    dateLastModified: new Date(2023, 11, 1, 22, 43, 36),
    impact: 17,
    views: 8596,
    tags: ["Vue", "Angular", "Programming", "Functional Programming"],
    communityForum: [],
    professionalForum: [],
  },

  {
    id: "8",
    title: "TypeScript and Webpack: A Developer's Guide",
    body: "This is a mock post about Effective TypeScript: Tips and Tricks...",
    author: "Terry Aki",
    datePublished: new Date(2023, 3, 2, 17, 38, 47),
    dateLastModified: new Date(2023, 11, 14, 9, 13, 48),
    impact: 24,
    views: 3219,
    tags: ["Node.js"],
    communityForum: [],
    professionalForum: [],
  },

  {
    id: "9",
    title: "TypeScript and Vue: Building Robust Applications",
    body: "This is a mock post about TypeScript and React: A Comprehensive Guide...",
    author: "Pat Myback",
    datePublished: new Date(2023, 7, 28, 0, 34, 4),
    dateLastModified: new Date(2023, 11, 11, 21, 10, 23),
    impact: 15,
    views: 868,
    tags: ["Angular", "React", "Testing", "Functional Programming"],
    communityForum: [],
    professionalForum: [],
  },

  {
    id: "10",
    title: "TypeScript Type Assertions and Type Guards",
    body: "This is a mock post about Building a REST API with TypeScript and Express...",
    author: "Chris P. Bacon",
    datePublished: new Date(2023, 5, 30, 5, 33, 35),
    dateLastModified: new Date(2023, 10, 15, 7, 49, 14),
    impact: 68,
    views: 8723,
    tags: ["Testing"],
    communityForum: [],
    professionalForum: [],
  },
  {
    id: "11",
    title: "TypeScript and Webpack: A Developer's Guide",
    body: "This is a mock post about Optimizing TypeScript Applications for Performance...",
    author: "Terry Aki",
    datePublished: new Date(2023, 10, 22, 13, 47, 20),
    dateLastModified: new Date(2023, 11, 30, 6, 40, 36),
    impact: 51,
    views: 242,
    tags: [
      "Functional Programming",
      "TypeScript",
      "JavaScript",
      "Async Programming",
    ],
    communityForum: [],
    professionalForum: [],
  },

  {
    id: "12",
    title: "Organizing Projects with TypeScript Namespaces",
    body: "This is a mock post about Understanding TypeScript for Beginners...",
    author: "Pat Myback",
    datePublished: new Date(2023, 2, 4, 10, 58, 8),
    dateLastModified: new Date(2023, 8, 26, 7, 54, 8),
    impact: 71,
    views: 1579,
    tags: ["Vue"],
    communityForum: [],
    professionalForum: [],
  },
  {
    id: "13",
    title: "TypeScript and React: A Comprehensive Guide",
    body: "This is a mock post about TypeScript and Async/Await: Writing Asynchronous Code...",
    author: "Sam O'Nella",
    datePublished: new Date(2023, 9, 16, 16, 49, 13),
    dateLastModified: new Date(2023, 10, 16, 4, 20, 29),
    impact: 78,
    views: 4993,
    tags: ["Testing"],
    communityForum: [],
    professionalForum: [],
  },
  {
    id: "14",
    title: "Optimizing TypeScript Applications for Performance",
    body: "This is a mock post about TypeScript in Node.js: Best Practices...",
    author: "Pat Myback",
    datePublished: new Date(2023, 8, 4, 20, 20, 50),
    dateLastModified: new Date(2023, 9, 18, 3, 43, 44),
    impact: 52,
    views: 4361,
    tags: ["Async Programming", "Vue", "Functional Programming", "Angular"],
    communityForum: [],
    professionalForum: [],
  },
  {
    id: "15",
    title: "Mastering Generics in TypeScript",
    body: "This is a mock post about TypeScript Type Assertions and Type Guards...",
    author: "Terry Aki",
    datePublished: new Date(2023, 4, 5, 21, 56, 18),
    dateLastModified: new Date(2023, 8, 23, 14, 53, 14),
    impact: 76,
    views: 7517,
    tags: ["React", "JavaScript", "Node.js"],
    communityForum: [],
    professionalForum: [],
  },
  {
    id: "16",
    title: "TypeScript in Node.js: Best Practices",
    body: "This is a mock post about TypeScript and Webpack: A Developer's Guide...",
    author: "Terry Aki",
    datePublished: new Date(2023, 7, 6, 14, 2, 48),
    dateLastModified: new Date(2023, 8, 1, 8, 17, 33),
    impact: 29,
    views: 8209,
    tags: ["Functional Programming", "Web Development"],
    communityForum: [],
    professionalForum: [],
  },
  {
    id: "17",
    title: "TypeScript in Node.js: Best Practices",
    body: "This is a mock post about TypeScript Type Assertions and Type Guards...",
    author: "Pat Myback",
    datePublished: new Date(2023, 9, 29, 23, 53, 34),
    dateLastModified: new Date(2023, 12, 17, 14, 44, 4),
    impact: 98,
    views: 210,
    tags: ["Functional Programming", "Vue"],
    communityForum: [],
    professionalForum: [],
  },
  {
    id: "18",
    title: "TypeScript in Node.js: Best Practices",
    body: "This is a mock post about Organizing Projects with TypeScript Namespaces...",
    author: "Robin Banks",
    datePublished: new Date(2023, 8, 30, 5, 16, 6),
    dateLastModified: new Date(2023, 11, 28, 12, 27, 29),
    impact: 88,
    views: 9969,
    tags: ["Functional Programming"],
    communityForum: [],
    professionalForum: [],
  },
  {
    id: "19",
    title: "TypeScript Enums and Union Types Explained",
    body: "This is a mock post about TypeScript and Async/Await: Writing Asynchronous Code...",
    author: "Robin Banks",
    datePublished: new Date(2023, 7, 31, 18, 35, 4),
    dateLastModified: new Date(2023, 10, 21, 6, 34, 39),
    impact: 60,
    views: 4569,
    tags: ["Async Programming"],
    communityForum: [],
    professionalForum: [],
  },
  {
    id: "20",
    title: "TypeScript and Webpack: A Developer's Guide",
    body: "This is a mock post about Optimizing TypeScript Applications for Performance...",
    author: "Pat Myback",
    datePublished: new Date(2023, 7, 13, 5, 59, 58),
    dateLastModified: new Date(2023, 9, 19, 12, 54, 11),
    impact: 12,
    views: 2078,
    tags: ["Web Development", "TypeScript", "JavaScript"],
    communityForum: [],
    professionalForum: [],
  },
  {
    id: "21",
    title: "Functional Programming in TypeScript",
    body: "This is a mock post about TypeScript and Webpack: A Developer's Guide...",
    author: "Robin Banks",
    datePublished: new Date(2023, 4, 16, 12, 48, 54),
    dateLastModified: new Date(2023, 12, 9, 15, 18, 38),
    impact: 52,
    views: 6182,
    tags: ["Angular", "Async Programming"],
    communityForum: [],
    professionalForum: [],
  },
].sort((a, b) => b.views - a.views);

export default function Home() {
  const [hoverPostId, setHoverPostId] = useState<string>("");

  return (
    <>
      <Head>
        <title>Pseudo</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/icons/code.svg" />
      </Head>
      <div className="grid w-full grid-cols-12 gap-4">
        <div className="col-span-12 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <div className="space overflow-hidden">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className="shootingstar"></div>
            <div className="shootingstar"></div>
            <div className="shootingstar"></div>
            <div className="shootingstar"></div>
            <div className="shootingstar"></div>
            <h2 id="title" className="text-lg font-semibold">
              Welcome to Pseudo!
            </h2>
            <p id="subtitle" className="text-lg font-semibold">
              Auburn Hacks 2024!
            </p>
            <div className="rotate-45">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: rocket,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={150}
                width={150}
              />
            </div>
          </div>
        </div>
        <div className="col-span-8 flex flex-col items-center gap-2">
          <div className="w-full rounded-lg border border-gray-200 bg-white px-6 py-4 shadow-sm">
            <h2 className="text-xl font-semibold">Top Questions</h2>
            <div className="flex flex-col divide-y-2">
              {mockPosts.map((post, idx) => (
                <PostCard
                  key={idx}
                  data={post}
                  hoverId={hoverPostId}
                  setHoverId={setHoverPostId}
                />
              ))}
            </div>
          </div>
          <Link
            href="/questions"
            className="border-primaryGreen-900 flex items-center gap-2 rounded-lg border bg-primaryGreen px-8 py-2 text-white shadow-sm"
          >
            <div>See more</div>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="col-span-4 flex flex-col items-center">
          <div className="w-full rounded-lg border border-gray-200 bg-white px-6 py-4 shadow-sm">
            <h2 className="text-xl font-semibold">Platform Stats</h2>
          </div>
        </div>
      </div>
    </>
  );
}

// Keep incase we need to later  referendce to implement the user profile fetch.
//
// import React from "react";
// import { useUser } from "@auth0/nextjs-auth0/client";

// function index() {
//   const { user, error, isLoading } = useUser();
//   return <a href="api/auth/login">Login</a>;
// }

// export default index;
