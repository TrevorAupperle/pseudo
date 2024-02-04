import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import type { Dispatch, SetStateAction } from "react";
import classNames from "~/utils/classNames";

export type TextFieldData = {
  value: string;
  error?: boolean;
  disabled?: boolean;
  optional?: boolean;
};

export const TextField = ({
  id,
  label,
  description,
  data,
  setData,
  validationMessage,
  validation,
  format,
  className,
}: {
  id: string;
  label?: string;
  description?: string;
  data: TextFieldData;
  setData: Dispatch<SetStateAction<TextFieldData>>;
  validationMessage?: string;
  validation?: (value: string) => boolean;
  format?: (value: string) => string;
  className?: string;
}) => {
  const validateOnChange = (data: TextFieldData, input: string) => {
    const formattedInput = format ? format(input) : input;
    if (validation && !validation(input)) {
      if (formattedInput === "" && data.optional) {
        setData({ ...data, value: formattedInput, error: false });
      } else {
        setData({ ...data, value: formattedInput, error: true });
      }
    } else {
      setData({ ...data, value: formattedInput, error: false });
    }
  };

  return (
    <div className={classNames(className ?? "")}>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
        {data.optional && (
          <span className="ml-1 text-sm font-semibold text-gray-400">
            (optional)
          </span>
        )}
      </label>
      {description && (
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      )}
      <div className="mt-1">
        <div
          className={classNames(
            data.error
              ? "ring-red-300 focus-within:ring-red-500"
              : "focus-within:ring-primaryBlue ring-gray-300",
            "flex rounded-md shadow-sm ring-1 ring-inset  focus-within:ring-2 focus-within:ring-inset ",
          )}
        >
          <input
            type="text"
            name={id}
            id={id}
            autoComplete={id}
            className={classNames(
              data.disabled
                ? "bg-black/5 text-gray-700"
                : "bg-transparent text-gray-900",
              data.error
                ? "-mr-8 text-red-900 placeholder-red-300"
                : "focus:border-primaryBlue focus:ring-primaryBlue border-gray-300",
              "block flex-1 rounded-md border-0 py-1.5 pl-2 focus:ring-0 sm:text-sm sm:leading-6",
            )}
            value={data.value}
            onChange={(e) => validateOnChange(data, e.currentTarget.value)}
            disabled={data.disabled}
          />
          {data.error && (
            <div className="pointer-events-none inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon
                className="h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
        {data.error && (
          <p className="mt-2 text-sm text-red-600" id="email-error">
            {validationMessage ?? "This field is required"}
          </p>
        )}
      </div>
    </div>
  );
};
