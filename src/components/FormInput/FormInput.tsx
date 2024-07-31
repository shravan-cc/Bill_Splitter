import React from "react";
import styles from "./FormInput.module.css";
import { NumberInput } from "../NumberInput/NumberInput";
import { BillTip } from "../BillTip/BillTip";

export function FormInput() {
  return (
    <div className={styles.container}>
      <NumberInput label="Bill" typeOfIcon="dollar" />
      <BillTip
        label="Select Tip %"
        values={["5%", "10%", "15%", "25%", "50%", "Custom"]}
      />
      <NumberInput label="Number of People" typeOfIcon="person" />
    </div>
  );
}
