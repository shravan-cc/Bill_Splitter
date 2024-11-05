/* eslint-disable @typescript-eslint/no-explicit-any */

// import styles from "./BillTip.module.css";
import { ButtonInput } from "../ButtonInput/ButtonInput";
interface BillTipProps {
  label: string;
  values: string[];
  setBtnValue: (selectedTip: number) => void;
  //customValue: string;
  handleInputChangeInCustom: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: any;
  selectedTip: number;
  isCustomInputVisible: boolean;
  setCustomInputVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function BillTip({
  label,
  values,
  setBtnValue,
  //customValue,
  handleInputChangeInCustom,
  //handleCustomClick,
  inputRef,
  selectedTip,
  isCustomInputVisible,
  setCustomInputVisible,
}: BillTipProps) {
  function handleCustomClick() {
    setCustomInputVisible(true);
    setTimeout(() => {
      inputRef.current && inputRef.current.focus();
    }, 0);
  }

  function handleCustomBlur() {
    if (inputRef.current.value === "") setCustomInputVisible(false);
  }

  return (
    <div className="bg-white w-full mb-[4.109rem] mt-[3.859rem] sm-max:mb-[2rem] sm-max:mt-[2rem] sm-max:w-full">
      <label className="font-mono text-xl leading-[1.5] text-custom-light-grey font-bold sm-max:text-[0.9rem]">
        {label}
      </label>
      <div className="grid grid-cols-3 gap-[1.5vw] w-full mt-[1.5rem] sm-max:grid-cols-2 sm-max:mt-[1rem] sm-max:gap-[1rem]">
        {values.map((value) =>
          value === "Custom" ? (
            
            isCustomInputVisible ? (
              <input
                ref={inputRef}
                type="text"
                className="w-full rounded-[6px] bg-white text-custom-light-grey text-[1.5rem] leading-[1.5] font-mono text-center border-2 border-custom-tiffany-blue outline-none"
                //placeholder="Custom"
                aria-label="Custom tip percentage"
                onChange={handleInputChangeInCustom}
                onBlur={handleCustomBlur}
              />
            ) : (
              <ButtonInput
                value={value}
                types="custom"
                key={value}
                onClick={handleCustomClick}
                selectedTip={selectedTip}
              ></ButtonInput>
            )
          ) : (
            <ButtonInput
              value={value}
              types="normal"
              onClick={() => {
                setBtnValue(Number(value.slice(0, -1)));
                setCustomInputVisible(false);
                //setActiveButton(value);
              }}
              selectedTip={selectedTip}
            />
          )
        )}
      </div>
    </div>
  );
}
