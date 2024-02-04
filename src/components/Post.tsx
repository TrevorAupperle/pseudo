import {
  UserCircleIcon,
  EyeIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";
import { type Post } from "~/pages";
import classNames from "~/utils/classNames";
import { convertDate } from "~/utils/convertDate";

export const PostCard = ({
  data,
  hoverId,
  setHoverId,
}: {
  data: Post;
  hoverId: string;
  setHoverId: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div>
      <div
        className={classNames(
          "flex flex-col gap-3 rounded-lg px-4 py-4",
          hoverId === data.id ? "bg-gray-100" : "bg-white",
        )}
        onMouseEnter={() => setHoverId(data.id)}
        onMouseLeave={() => setHoverId("")}
      >
        <Link href={`/post/${data.id}`} className="flex flex-col">
          <div className="font-semibold text-primaryBlue underline-offset-4 hover:underline">
            {data.title}
          </div>
          <div className="text-sm text-gray-500">
            {data.body.substring(
              0,
              data.body.length > 100 ? 100 : data.body.length,
            ) + " ..."}
          </div>
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <UserCircleIcon className="h-5 w-5 text-primaryBlue" />
            <Link
              href="/user/id"
              className="text-sm font-semibold text-primaryBlue underline-offset-4 hover:underline"
            >
              {data.author}
            </Link>
            <div className="mt-[2px] h-1 w-1 rounded-full bg-gray-500" />
            <div className="text-sm text-gray-500">
              {"posted " + convertDate(data.datePublished)}
            </div>
            <div className="mt-[2px] h-1 w-1 rounded-full bg-gray-500" />
            {data.dateLastModified !== data.datePublished && (
              <div className="text-sm text-gray-500">
                {" edited " + convertDate(data.dateLastModified)}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <EyeIcon className="h-4 w-4 text-gray-400" />
              <div className="text-sm text-gray-500">
                {data.views + " views"}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <ChevronDoubleUpIcon className="text-primaryGreen h-4 w-4" />
              <div className="text-primaryGreen text-sm">
                {data.impact + " impact"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
