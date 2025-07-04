"use client";

import React, { useState } from "react";
import styles from "./HamburgerMenu.module.css";
import HamburgerIcon from "./HamburgerIcon";

export default function HamburgerMenu({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.hamburgerMenu} ${open ? styles.openMenu : ""}`}>
      <div className={`${styles.hamburgerMenuHeader}`}>
        <div className={`${styles.hamburgerMenuTitle}`}>
          {title ? title : ""}
        </div>
        <HamburgerIcon onClick={() => setOpen((v) => !v)} />
      </div>
      <div className={`${styles.hamburgerMenuContent}`}>{children}</div>
    </div>
  );
}
