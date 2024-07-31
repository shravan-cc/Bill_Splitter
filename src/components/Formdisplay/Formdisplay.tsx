import React from "react";
import styles from "./Formdisplay.module.css";
import { Tipamount } from "../Tipamount/Tipamount";

export function Formdisplay() {
  return (
    <div className={styles.container}>
      <Tipamount title="Tip Amount" value="0.00" />
      <Tipamount title="Total" value="0.00" />
      <button className={styles.resetBtn}>RESET</button>
    </div>
  );
}
