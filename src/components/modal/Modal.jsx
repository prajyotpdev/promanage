import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.content}>{children}</div>
    </div> 
  );
};

export default Modal;
