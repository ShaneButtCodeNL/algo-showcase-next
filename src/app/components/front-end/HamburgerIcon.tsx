"use client";
import { useState } from "react";
import styles from "./HamburgerIcon.module.css";
export default function HamburgerIcon(props: { open?: boolean; onClick: any }) {
  const [expand, setExpand] = useState(props.open);
  return (
    <div className={styles.hamburgerIconContainer}>
      <div
        className={`${
          !expand ? styles.openHamburgerIcon : styles.closedHamburgerIcon
        } ${styles.hamburgerIcon}`}
        onClick={() => {
          props.onClick();
          setExpand((v) => !v);
        }}
      >
        <div className={styles.hamburgerIconTop}></div>
        <div className={styles.hamburgerIconMiddle}></div>
        <div className={styles.hamburgerIconBottom}></div>
      </div>
    </div>
  );
}
