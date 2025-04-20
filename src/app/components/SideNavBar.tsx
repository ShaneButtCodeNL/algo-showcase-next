"use client";

import Link from "next/link";
import Directory from "./Directory";

export default function SideNavBar(props: any) {
  const openString = "<";
  const closeString = ">";
  return (
    <>
      <div className="sidebar-content" inert={props.showSB === false}>
        <div style={{ borderBottom: "solid 1px" }}>
          <Link href="/">Home</Link>
        </div>
        <Directory />
      </div>
      <button
        className="sidebar-slider"
        onClick={() => props.setShowSB((e: any) => !e)}
        style={{ width: "1rem" }}
      >
        {props.showSB ? openString : closeString}
      </button>
    </>
  );
}
