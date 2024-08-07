import styles from "./Formdisplay.module.css";
import { Tipamount } from "../Tipamount/Tipamount";

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
    <div className={styles.container}>
      <Tipamount title="Tip Amount" value={tipAmount} />
      <Tipamount title="Total" value={totalAmount} />
      <button
        className={styles.resetBtn}
        onClick={resetValues}
        disabled={!disableButton}
      >
        RESET
      </button>
    </div>
  );
}
