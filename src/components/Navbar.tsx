import {
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import PseudoLogo from "public/icons/code.svg";
import { Fragment, useState } from "react";
import classNames from "~/utils/classNames";
import { Transition } from "@headlessui/react";

export type NavbarSearchItem = {
  id: string;
  name: string;
};

const mockSearchItems: NavbarSearchItem[] = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Doe" },
  { id: "3", name: "John Smith" },
  { id: "4", name: "Jane Smith" },
  { id: "5", name: "John Johnson" },
  { id: "6", name: "Jane Johnson" },
  { id: "7", name: "John Williams" },
  { id: "8", name: "Jane Williams" },
  { id: "9", name: "John Brown" },
  { id: "10", name: "Jane Brown" },
  { id: "11", name: "John Davis" },
  { id: "12", name: "Jane Davis" },
  { id: "13", name: "John Miller" },
  { id: "14", name: "Jane Miller" },
  { id: "15", name: "John Wilson" },
  { id: "16", name: "Jane Wilson" },
  { id: "17", name: "John Moore" },
  { id: "18", name: "Jane Moore" },
  { id: "19", name: "John Taylor" },
  { id: "20", name: "Jane Taylor" },
];

export const Navbar = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [searchBarFocused, setSearchBarFocused] = useState(false);

  return (
    <div className="mt-4 flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-6 shadow-sm">
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center py-2">
          <PseudoLogo className="text-2xl" />
          {/* <h1 className="font-logo text-primaryBlue font-bold">Pseudo</h1> */}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className={classNames(
              router.pathname === "/"
                ? "border-primaryBlue text-primaryBlue -mb-[2px] border-b-2 px-6 py-3 font-bold"
                : "border-primaryBlue-300 hover:text-primaryBlue-300 px-4 py-3 text-gray-400 hover:-mb-[2px] hover:border-b-2",
            )}
          >
            Home
          </Link>
          <Link
            href="/"
            className={classNames(
              router.pathname === "/questions"
                ? "border-primaryBlue text-primaryBlue -mb-[2px] border-b-2 px-6 py-3 font-bold"
                : "border-primaryBlue-300 hover:text-primaryBlue-300 px-4 py-3 text-gray-400 hover:-mb-[2px] hover:border-b-2",
            )}
          >
            Questions
          </Link>
          <Link
            href="/"
            className={classNames(
              router.pathname === "/users"
                ? "border-primaryBlue text-primaryBlue -mb-[2px] border-b-2 px-6 py-3 font-bold"
                : "border-primaryBlue-300 hover:text-primaryBlue-300 px-4 py-3 text-gray-400 hover:-mb-[2px] hover:border-b-2",
            )}
          >
            Users
          </Link>
          <Link
            href="/"
            className={classNames(
              router.pathname === "/notifications"
                ? "border-primaryBlue text-primaryBlue -mb-[2px] border-b-2 px-6 py-3 font-bold"
                : "border-primaryBlue-300 hover:text-primaryBlue-300 px-4 py-3 text-gray-400 hover:-mb-[2px] hover:border-b-2",
            )}
          >
            Notifications
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
            <MagnifyingGlassIcon className="ml-1 h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            id="mainSearch"
            className={classNames(
              "focus:border-primaryBlue focus:ring-primaryBlue text-primaryBlue block w-full rounded-lg border border-gray-300 bg-gray-100 py-1.5 pl-8 text-sm placeholder:text-sm placeholder:text-gray-400",
            )}
            placeholder="Search users and posts..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setSearchBarFocused(true)}
            onBlur={() => setSearchBarFocused(false)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setSearchValue("")}
            show={searchBarFocused && searchValue !== ""}
          >
            <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              <ul className="divide-y divide-gray-200">
                {mockSearchItems.length === 0 && (
                  <li>
                    <div className="block px-4 py-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="text-auburnBlue-900 text-sm font-medium">
                          No ambassadors found
                        </div>
                      </div>
                    </div>
                  </li>
                )}
                {mockSearchItems.map((item) => (
                  <li key={item.id}>
                    <Link href={`/`}>
                      <div className="block px-4 py-4 hover:bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div
                            className={classNames(
                              "text-auburnBlue-900 font-medium",
                            )}
                          >
                            {item.name}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Transition>
        </div>
        <Link href="/profile">
          <UserCircleIcon className="text-primaryBlue h-8 w-8" />
        </Link>
      </div>
    </div>
  );
};
