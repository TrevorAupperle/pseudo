import { type Dispatch, Fragment, type SetStateAction } from "react";
import { Listbox as HeadlessListbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import classNames from "~/utils/classNames";

export type ListboxItem = { name: string };

export const Listbox = ({
  id,
  items,
  selected,
  setSelected,
  label,
  className,
}: {
  id: string;
  items: ListboxItem[];
  selected: ListboxItem;
  setSelected: Dispatch<SetStateAction<ListboxItem>>;
  label: string;
  className?: string;
}) => {
  return (
    <div className={classNames(className ?? "")}>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <HeadlessListbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <HeadlessListbox.Button className="relative w-full cursor-default rounded-lg border border-gray-300 bg-white py-2 pl-3  pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">
              {selected ? selected.name : "Select a person"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </HeadlessListbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <HeadlessListbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {items.map((item, idx) => (
                <HeadlessListbox.Option
                  key={idx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-primaryBlue-200 text-primaryBlue"
                        : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item.name}
                      </span>
                      {selected ? (
                        <span className="text-primaryBlue absolute inset-y-0 left-0 flex items-center pl-3">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </HeadlessListbox.Option>
              ))}
            </HeadlessListbox.Options>
          </Transition>
        </div>
      </HeadlessListbox>
    </div>
  );
};
