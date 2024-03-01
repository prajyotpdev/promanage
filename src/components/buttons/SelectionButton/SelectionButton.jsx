import styles from "./SelectionButton.module.css";

const SelectionButton = ({children ,color ,borderColor  ,fontColor ,onClick , selectionColor,flag}) => {
  return (
    <button className={styles.SelectionButton} onClick={onClick} 
    style={{ "--border-color": borderColor, "--bg-color": flag?selectionColor:color, "--font-color": fontColor }}>
        {children}
    </button>
  );
};

export default SelectionButton;
