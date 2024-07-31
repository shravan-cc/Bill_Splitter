import styles from "./Logo.module.css";

export interface LogoProps {
  image: string;
  url: string;
  customClass?: string;
}

export const Logo = ({ image, url, customClass }: LogoProps) => {
  const finalClassList =
    customClass !== undefined
      ? `${styles.logo} ${customClass}`
      : `${styles.logo}`;
  return (
    <a href={url} target="_blank">
      <img src={image} className={finalClassList} alt="Vite logo" />
    </a>
  );
};
