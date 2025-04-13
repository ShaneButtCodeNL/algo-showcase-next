"use client";

import bubbleSortAlgo from "@/app/algorithm-code/bubbleSortAlgo";
import { times } from "@/constants";
import { useState } from "react";

export default function BubbleSortDisplay(props: any) {
  const [list, setList] = useState([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  const [p1, setP1] = useState(-1);
  const [p2, setP2] = useState(-1);
  const [compares, setCompares] = useState(0);
  const [swaps, setSwaps] = useState(0);
  const [sorted, setSorted] = useState(0);
  const [step, setStep] = useState(0);
  const [animation, setAnimation] = useState(null);
  const speed = 0;
  const speeds = times;

  const animationFrames = bubbleSortAlgo(list);
  console.log(animationFrames);
  return (
    <div>
      <div>bubbleSort {step}</div>
      <div id="bs-list" className="horizontal-list">
        {list.map((v, i) => (
          <div
            key={`${"list-item-" + i}`}
            id={`${"list-item-" + i}`}
            className={i === p1 || i === p2 ? "green-border" : ""}
          >
            {v}
          </div>
        ))}
      </div>
      <div id="bs-sort-controls">
        <button
          id="bs-sort-button"
          onClick={() => {
            if (animation === null) {
              var interval = setInterval(() => {
                const nextValue = step + 1;

                setStep((v) => {
                  v += 1;
                  setP1(animationFrames[v].p1);
                  setP2(animationFrames[v].p2);
                  setList(animationFrames[v].list);
                  setCompares(animationFrames[v].compares);
                  setSwaps(animationFrames[v].swaps);
                  if (v === animationFrames.length - 1) {
                    clearInterval(interval);
                    setAnimation(null);
                  }
                  return v;
                });
              }, 2 * speeds[speed]);
              setAnimation(interval);
            }
          }}
        >
          Start
        </button>
      </div>
      <div>
        Stats
        <br />
        Frame : {step}
        <br />
        Swaps : {swaps}
        <br />
        Compares : {compares}
      </div>
    </div>
  );
}
