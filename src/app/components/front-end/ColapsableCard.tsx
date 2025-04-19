"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";

export default function CollapsableCard(props: {
  title: string;
  open?: boolean;
  link?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(props.open ? props.open === true : true);
  return (
    <div className={`collapsable-card ${open ? "" : "collapse-card"}`}>
      <div className="collapsable-card-title">
        {props.link ? (
          <Link href={props.link}>
            <h3>{props.title}</h3>
          </Link>
        ) : (
          <h2>{props.title}</h2>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpen((v) => !v);
          }}
        >
          {open ? "\u27F1" : "\u27f0"}
        </button>
      </div>
      <div className={`card-body ${open ? "" : "hide-card"}`} hidden={!open}>
        {props.children}
      </div>
    </div>
  );
}
