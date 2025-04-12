"use client";

import { useState } from "react";
import SideNavBar from "./SideNavBar";
import TitleBar from "./TitleBar";

export default function MainPageComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSB, setShowSB] = useState(true);
  return (
    <main id="main" className={`${showSB ? "" : "hide-sidebar"}`}>
      <TitleBar />
      <SideNavBar showSB={showSB} setShowSB={setShowSB} />
      <div id="main-content" className="main-content">
        {children}
      </div>
    </main>
  );
}
