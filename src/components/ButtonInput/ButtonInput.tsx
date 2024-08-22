import React from "react";
// import styles from "./ButtonInput.module.css";
interface ButtonInputProps extends React.ComponentProps<"button"> {
  value: string;
  types: "normal" | "custom";
  selectedTip: number;
}

export function ButtonInput({
  value,
  types,
  selectedTip,
  ...buttonProps
}: ButtonInputProps) {
  return (
    <div className="bg-white flex w-full">
      <button
        value={value}
        // className={`${styles[types]} ${selectedTip === Number(value.slice(0, -1)) ? styles.active : ""}`}
        className={`${types === "normal" ? "py-2 w-full rounded-md bg-custom-dark-green text-[#feffff] font-mono font-bold text-[2vw] border-none sm-max:rounded-[4px] sm-max:text-[6vw] sm-max:w-full" : ""}
        ${types === "custom" ? "py-2 w-full rounded-md bg-[#f3f8fb] text-custom-light-grey font-mono font-bold text-[1.5vw] border-none sm-max:rounded-[4px] sm-max:text-[6vw] sm-max:w-full" : ""}
        ${selectedTip === Number(value.slice(0, -1)) ? "bg-[#26c2ad] text-[#00474b]" : ""}`}
        {...buttonProps}
      >
        {value}
      </button>
    </div>
  );
}
