// import styles from "./Formdisplay.module.css";
import { Tipamount } from "../Tipamount/Tipamount";
import clsx from "clsx";

interface FormDisplayProps {
  resetValues: () => void;
  tipAmount: string;
  totalAmount: string;
  disableButton: boolean;
}

export function Formdisplay({
  resetValues,
  tipAmount,
  totalAmount,
  disableButton,
}: FormDisplayProps) {
  return (
    <div className="bg-custom-dark-green w-full p-[3.5vw] rounded-[16px] border-box sm-max:pt-6 sm-max:pr-4 sm-max:pb-4 sm-max:pl-4 sm-max:mt-2 sm-max:mb-2">
      <Tipamount title="Tip Amount" value={tipAmount} />
      <Tipamount title="Total" value={totalAmount} />
      <button
        // className={`font-mono font-bold text-xl leading-[1.5] bg-custom-teal text-custom-dark-green w-full rounded-[7px] mt-[8.438rem] outline-none  sm-max:text-[6vw] sm-max:w-full sm-max:rounded-[4.32px] sm-max:mt-[43px] group ${!disableButton ? "cursor-not-allowed" : "hover:bg-custom-light-teal hover:text-custom-dark-green hover:cursor-pointer"}`}
        className={clsx(
          "font-mono font-bold text-xl leading-[1.5] bg-custom-teal text-custom-dark-green w-full rounded-[7px] mt-[8.438rem] outline-none  sm-max:text-[6vw] sm-max:w-full sm-max:rounded-[4.32px] sm-max:mt-[43px]",
          {
            "cursor-not-allowed": !disableButton,
            "hover:bg-custom-light-teal hover:text-custom-dark-green hover:cursor-pointer":
              disableButton,
          }
        )}
        onClick={resetValues}
        disabled={!disableButton}
      >
        RESET
      </button>
    </div>
  );
}
