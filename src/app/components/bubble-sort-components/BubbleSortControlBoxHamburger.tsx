import { useState } from "react";

export default function BubbleSortControlBoxHamburger(props: any) {
  const [expand, setExpand] = useState(false);
  return (
    <div className="hamburger-icon-container">
      <div
        className={`${
          expand ? "open" : "closed"
        }-hamburger-icon hamburger-icon`}
        onClick={() => setExpand((v) => !v)}
      >
        -
      </div>
    </div>
  );
}
