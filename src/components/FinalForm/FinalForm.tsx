import React from "react";
import styles from "./FinalForm.module.css";
import { FormInput } from "../FormInput/FormInput";
import { Formdisplay } from "../Formdisplay/Formdisplay";

export function FinalForm(props) {
  return (
    <div className={styles.container}>
      <FormInput />
      <Formdisplay />
    </div>
  );
}
