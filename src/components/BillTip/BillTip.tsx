import React from "react";
import styles from "./BillTip.module.css";
import { ButtonInput } from "../ButtonInput/ButtonInput";
interface BillTipProps {
  label: string;
  values: string[];
}

export function BillTip({ label, values }: BillTipProps) {
  return (
    <div className={styles.billContainer}>
      <label className={styles.labelName}>{label}</label>
      <div className={styles.buttonContainer}>
        {values.map((value) =>
          value === "Custom" ? (
            <ButtonInput value={value} type="custom" />
          ) : (
            <ButtonInput value={value} type="normal" />
          )
        )}
      </div>
    </div>
  );
}
