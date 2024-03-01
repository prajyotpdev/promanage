import styles from "./SolidButton.module.css";

const SolidButton = ({children ,bgcolor ,fontColor ,onClick}) => {
  return (
    <button className={styles.solidbutton} onClick={onClick} 
    style={{ "--bg-color": bgcolor, "--font-color": fontColor }}>
        {children}
    </button>
  );
};

export default SolidButton;
