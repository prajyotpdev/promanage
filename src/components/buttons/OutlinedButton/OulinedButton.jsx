import styles from "./OutlinedButton.module.css";

const OutlinedButton = ({children ,color ,borderColor  ,fontColor ,onClick }) => {
  return (
    <button className={styles.outlinedbutton} onClick={onClick} 
    style={{ "--border-color": borderColor, "--bg-color": color, "--font-color": fontColor }}>
        {children}
    </button>
  );
};

export default OutlinedButton;
