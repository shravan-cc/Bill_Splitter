/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from "./NumberInput.module.css";
import { faDollar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NumberInputProps extends React.ComponentProps<"input"> {
  label: string;
  typeOfIcon: "person" | "dollar";
  error?: string;
} // Define your props here } export function
export function NumberInput({
  label,
  typeOfIcon,
  error,
  ...inputProps
}: NumberInputProps) {
  return (
    <div className="bg-white font-mono">
      <label
        htmlFor="number-input"
        className="text-xl font-bold text-custom-light-grey md:text-sm md:leading-tight"
      >
        {label}
      </label>
      <div
        // className={`${styles.inputWrapper} ${error ? styles.errorInput : ""} `}
        className={`relative flex items-center px-5 py-2 w-full bg-custom-label-background rounded-[6px] mt-[14px] border ${
          error
            ? "border-red-600"
            : "border-transparent focus-within:border-custom-dark-green"
        }`}
      >
        {typeOfIcon === "dollar" ? (
          <FontAwesomeIcon
            icon={faDollar}
            className="text-2xl font-bold text-custom-dark-teal absolute block text-left"
          />
        ) : (
          <FontAwesomeIcon
            icon={faUser}
            className="text-2xl font-bold text-custom-dark-teal absolute block text-left"
          />
        )}
        <input
          type="number"
          id="number-input"
          className="font-mono text-[2rem] font-bold leading-[1.5] text-right bg-transparent w-full block outline-none text-custom-dark-teal overflow-hidden no-arrows"
          {...inputProps}
        />
      </div>
      <span className="text-red-600 block h-6">{error}</span>
    </div>
  );
}
