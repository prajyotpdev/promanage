import styles from "./DotIndicator.module.css";

const DotIndicator = ({ dotColor, height }) => {
  return (
    <>
      <span
        className={`${styles.dot} ${styles.dotColor}`}
        style={{ "--dot-height": height, "--dot-color": dotColor }}
      ></span>
    </>
  );
};

export default DotIndicator;
