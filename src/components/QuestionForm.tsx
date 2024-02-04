import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import type { Dispatch, SetStateAction } from "react";
import classNames from "~/utils/classNames";
import { createPost, getUserInfo } from "~/utils/api";
import { FormEvent } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { get } from "node_modules/axios/index.cjs";

// type QuestionData = {
//     title: string;
//     body: string;
//     author: string;
// };

    
export const QuestionForm = () => {
    const { user } = useUser();
    
    const usrinfo = getUserInfo(user?.sub);
    const formData = new FormData();
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;
    console.log(usrinfo.data);
    var response = await createPost(title, body, usrinfo.success);
    

    // Handle response if necessary
    const data = response.data;
    if (data.success) {
      alert("Success!");
    } else {
      alert("Error!");
    }
    }

  return (
    
    <form onSubmit={onSubmit}>
      <h1>Submit a question</h1>
      <input type="text" name="title" className="mt-2 text-sm text-gray-500" />
      <input type="text" name="body" className="mt-2 text-sm text-gray-500" />
      <button type="submit" className="mt-2 text-sm text-gray-500">
        Submit
      </button>
    </form>
  );
);
