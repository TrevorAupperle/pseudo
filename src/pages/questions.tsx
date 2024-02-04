import Head from "next/head";
import rocket from "public/lotties/rocket.json";
import Link from "next/link";
import { EyeIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { convertDate } from "~/utils/convertDate";
import { ChevronDoubleUpIcon } from "@heroicons/react/20/solid";
import { findPosts } from '../utils/api.js';

import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export type Post = {
  id: Number;
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

var posts = await findPosts("title");
var postsData = posts.data.data;

const mockPosts: Post[] = []

for (var i = 0; i < posts.data.data.length; i++)
{
  var postData = postsData[i];

  mockPosts.push(
    {
        id: i,
        title: postData.title,
        body: postData.body,
        author: postData.author,
        datePublished: postData.datePublished,
        dateLastModified: postData.dateLastModified,
        impact: postData.impact,
        views: postData.views,
        tags: postData.tags,
        communityForum: [],
        professionalForum: [],
      }
  );
}

export default function Questions() {
  return (
    <>
      <div>
        <div>
          <h1>Questions</h1>
          <div className="flex flex-col divide-y-2">
            {mockPosts.map((post, idx) => (
              <Link
                href="/post/id"
                key={idx}
                className="flex flex-col gap-3 py-2"
              >
                <div className="flex flex-col">
                  <div className="font-semibold text-primaryBlue">
                    {post.title}
                  </div>
                  <div className="text-sm text-gray-500">
                    {post.body.substring(
                      0,
                      post.body.length > 100 ? 100 : post.body.length,
                    ) + " ..."}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <UserCircleIcon className="h-5 w-5 text-primaryBlue" />
                    <div className="text-sm font-semibold text-primaryBlue">
                      {post.author}
                    </div>
                    <div className="mt-[2px] h-1 w-1 rounded-full bg-gray-500" />
                    <div className="text-sm text-gray-500">
                      {"posted " + convertDate(post.datePublished)}
                    </div>
                    <div className="mt-[2px] h-1 w-1 rounded-full bg-gray-500" />
                    {post.dateLastModified !== post.datePublished && (
                      <div className="text-sm text-gray-500">
                        {" edited " + convertDate(post.dateLastModified)}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <EyeIcon className="h-4 w-4 text-gray-400" />
                      <div className="text-sm text-gray-500">
                        {post.views + " views"}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <ChevronDoubleUpIcon className="h-4 w-4 text-primaryGreen" />
                      <div className="text-sm text-primaryGreen">
                        {post.impact + " impact"}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-4 rounded-lg border border-gray-200 bg-white px-6 py-2 shadow-sm"></div>
      </div>
    </>
  );
}
