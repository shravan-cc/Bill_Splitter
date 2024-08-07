/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from "./NumberInput.module.css";
import { faDollar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NumberInputProps extends React.ComponentProps<"input"> {
  label: string;
  typeOfIcon: "person" | "dollar";
  error?: string;
} // Define your props here } export function
export function NumberInput({
  label,
  typeOfIcon,
  error,
  ...inputProps
}: NumberInputProps) {
  /*const [value, setValue] = useState<string>(""); */
  //const [changed, makeChange] = useState<boolean>(false);

  /*const handleInputChange = (e: any) => {
    const newValue = e.target.value;
    setValue(newValue);
    makeChange(true);
  };*/
  /*let error = "";
  let hasError = false;
  if (change) {
    if (inputProps.value === "") {
      error = "Value cannot be empty";
      hasError = true;
    } else if (isNaN(Number(inputProps.value))) {
      error = "Please enter a number";
      hasError = true;
    } else if (Number(inputProps.value) <= 0) {
      error = "Value must be greater than zero";
      hasError = true;
    }
  }*/
  return (
    <div className={styles.container}>
      <label htmlFor="number-input" className={styles.labelName}>
        {label}
      </label>
      <div
        className={`${styles.inputWrapper} ${error ? styles.errorInput : ""} `}
      >
        {typeOfIcon === "dollar" ? (
          <FontAwesomeIcon icon={faDollar} className={styles.icon} />
        ) : (
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
        )}
        <input
          type="number"
          id="number-input"
          className={styles.numberInput}
          {...inputProps}
        />
      </div>
      <span className={styles.error}>{error}</span>
    </div>
  );
}
