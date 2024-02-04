import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import type { Dispatch, SetStateAction } from "react";
import classNames from "~/utils/classNames";
import { createPost, getUserInfo } from "~/utils/api";
import { FormEvent, useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { get } from "node_modules/axios/index.cjs";
import { count } from "console";
    
export const QuestionForm = () => {
    const { user } = useUser();
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(false)

    const getData = async () =>  {
      setLoading(true)
      try {
        const data = await getUserInfo(user?.sub)
        if (data) setUserData(data.data)
      } catch (e) {
        //handle error
      }
      setLoading(false)
    }

    useEffect(()=>{
      getData();
    },[])
    
    console.log(userData);
  return (
    <form>
      <h1>Submit a question</h1>
      <input type="text" name="title" className="mt-2 text-sm text-gray-500" />
      <input type="text" name="body" className="mt-2 text-sm text-gray-500" />
      <button type="submit" className="mt-2 text-sm text-gray-500">
        Submit
      </button>
    </form>
  );
}