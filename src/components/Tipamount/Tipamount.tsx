import styles from "./Tipamount.module.css";

interface TipamountProps {
  title: string;
  value: string;
}

export function Tipamount({ title, value }: TipamountProps) {
  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <p className={`${styles.text} ${styles.title}`}>{title}</p>
        <p className={`${styles.text} ${styles.person}`}>/ Person</p>
      </div>
      <p className={styles.value}>${value}</p>
    </div>
  );
}
