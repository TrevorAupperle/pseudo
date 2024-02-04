import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import classNames from "~/utils/classNames";

const Select = ({
  title,
  options,
  className,
}: {
  title: string;
  options: string[];
  className?: string;
}) => {
  const [selected, setSelected] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div
      className={classNames(
        className ? className + "relative w-full" : "relative w-full",
      )}
    >
      <label
        htmlFor="select-wrapper"
        className="text-primaryBlue absolute -top-[10px] left-5 z-[1] inline-block bg-white px-1 text-sm font-medium"
      >
        {title}
      </label>
      <button
        id="select-wrapper"
        className="text-primaryBlue focus:border-primaryBlue flex h-10 w-full justify-start rounded-md border-2 
      border-gray-300 px-4 py-[6px] font-medium transition-all 
      duration-200"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={() => setIsFocused(true)}
      >
        <div className="grow text-left">{options[selected]}</div>
        <ChevronDownIcon
          fontSize={24}
          className={`${isFocused && "rotate-180"} transition-all`}
        />
      </button>
      <div
        className={`absolute right-0 z-10 h-auto w-full origin-top-right rounded-md 
        border border-gray-300 bg-white opacity-0 shadow-md transition-all 
        duration-75 ${
          isFocused ? "visible mt-1 opacity-100 duration-300" : "invisible"
        }`}
      >
        <div className="flex flex-col py-1">
          {options.map((option, index) => (
            <button
              key={index}
              className={`text-primaryBlue px-3 py-2 text-left font-medium
              transition-all hover:bg-gray-200 ${
                index == selected && "bg-gray-200"
              }`}
              onClick={() => {
                setSelected(index);
                setIsFocused(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
