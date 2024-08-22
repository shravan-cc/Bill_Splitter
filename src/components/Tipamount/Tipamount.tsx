// import styles from "./Tipamount.module.css";

interface TipamountProps {
  title: string;
  value: string;
}

export function Tipamount({ title, value }: TipamountProps) {
  return (
    <div className="flex justify-between w-full mb-16 sm-max:mb-6 sm-max:w-full">
      <div className="flex flex-col">
        <p className="font-mono font-normal text-[1.25vw] leading-[1.5] text-white sm-max:text-[3vw]">
          {title}
        </p>
        <p className="font-mono font-normal text-[1.25vw] leading-[1.5] text-custom-desaturated-teal sm-max:text-[3vw]">
          / Person
        </p>
      </div>
      <p className="font-mono text-custom-tiffany-blue text-[3vw] leading-[1.5] sm-max:text-[6vw] sm-max:leading-[2.7rem]">
        ${value}
      </p>
    </div>
  );
}
