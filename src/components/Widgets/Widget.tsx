/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./Widget.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export const Widget = ({
  color,
  icon,
  heading,
  desc,
}: {
  /**
   * Type of color
   */
  color: string;
  /**
   * Type of icon
   */
  icon: any;
  /**
   * Type of heading
   */
  heading: string;
  /**
   * Type of desc
   */
  desc: string;
}) => {
  return (
    <div className={styles.mainclass}>
      <div className={styles.iconandline}>
        <FontAwesomeIcon
          icon={icon}
          className={styles.icon}
          style={{ color: `${color}` }}
        />
        <div
          className={styles.line}
          style={{ backgroundColor: `${color}` }}
        ></div>
      </div>
      <div style={{ backgroundColor: `${color}` }} className={styles.borders}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.paragraph}>{desc}</p>
      </div>
    </div>
  );
};
