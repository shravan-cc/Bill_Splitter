import styles from "./CounterComponent.module.css";

type CounterProps = {
  /**
   * Count value
   */
  count: number;
  /**
   * Increment Function
   */
  increment: () => void;
  /**
   * Decrement Function
   */
  decrement: () => void;
  /**
   * To handle the input change
   */
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CounterComponent = ({
  count,
  increment,
  decrement,
  handleInputChange,
}: CounterProps) => {
  return (
    <div className={styles.counterContainer}>
      <button className={styles.button} onClick={increment}>
        +
      </button>
      <input
        type="number"
        className={styles.input}
        value={count}
        onChange={handleInputChange}
      />
      <button className={styles.button} onClick={decrement}>
        -
      </button>
    </div>
  );
};

type NumberProps = {
  sum: number;
  product: number;
};

export const HeadingComponent = ({ sum, product }: NumberProps) => {
  return (
    <div>
      <h1>Calculator</h1>
      <p>
        Sum: <span>{sum}</span>
      </p>
      <p>
        Product: <span>{product}</span>
      </p>
    </div>
  );
};
