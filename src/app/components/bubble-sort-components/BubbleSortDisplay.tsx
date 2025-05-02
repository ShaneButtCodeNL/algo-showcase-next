"use client";

import bubbleSortAlgo from "@/app/algorithm-code/bubbleSortAlgo";
import { times } from "@/constants";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import NumberList from "../front-end/NumberList";
import BarList from "../front-end/BarList";
import BubbleSortControlBox from "./BubbleSortControlBox";

export default function BubbleSortDisplay(props: any) {
  let sampleList = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  let animationFrames = bubbleSortAlgo(sampleList);

  const [orders, setOrders] = useState(animationFrames[0].orders);
  const [list, setList] = useState(animationFrames[0].list);
  const [p1, setP1] = useState(-1);
  const [p2, setP2] = useState(-1);
  const [compares, setCompares] = useState(0);
  const [swaps, setSwaps] = useState(0);
  const [sorted, setSorted] = useState(animationFrames[0].sorted);
  const [step, setStep] = useState(0);
  const [animation, setAnimation]: [null | NodeJS.Timeout, any] =
    useState(null);
  const [displayNumbers, setDisplayNumbers] = useState(true);
  const speed = 0;
  const speeds = times;
  const reset = () => {
    setP1(-1);
    setP2(-1);
    setStep(0);
    setSwaps(0);
    setCompares(0);
    setSorted([]);
    if (animation) {
      clearInterval(animation);
      setAnimation(null);
    }
  };
  const makeAnimation = () => {
    if (animation === null) {
      var interval = setInterval(() => {
        setStep((v) => {
          v += 1;
          setP1(animationFrames[v].p1);
          setP2(animationFrames[v].p2);
          setList(animationFrames[v].list);
          setSorted(animationFrames[v].sorted);
          setCompares(animationFrames[v].compares);
          setSwaps(animationFrames[v].swaps);
          if (v === animationFrames.length - 1) {
            clearInterval(interval);
            setAnimation(null);
          }
          return v;
        });
      }, 300);
      setAnimation(interval);
    }
  };
  useEffect(() => {
    animationFrames = bubbleSortAlgo(list);
  }, [list]);
  return (
    <div className="main-content-wrapper">
      <p>bubbleSort {step}</p>
      <BubbleSortControlBox
        setList={setList}
        reset={reset}
        setStep={setStep}
        makeAnimation={makeAnimation}
        setOrders={setOrders}
        displayNumbers={displayNumbers}
        setDisplayNumbers={setDisplayNumbers}
      />
      {displayNumbers ? (
        <NumberList
          list={list.map((v) => v)}
          orders={orders.map((v) => v)}
          highlights={[p1, p2]}
          markComplete={sorted}
        />
      ) : (
        <BarList
          list={list.map((v) => v)}
          orders={orders.map((v) => v)}
          highlights={[p1, p2]}
          markComplete={sorted}
        />
      )}
      <div id="bs-sort-controls">
        <button
          id="bs-sort-button"
          onClick={() => {
            if (animation === null) {
              var interval = setInterval(() => {
                setStep((v) => {
                  v += 1;
                  setP1(animationFrames[v].p1);
                  setP2(animationFrames[v].p2);
                  setList(animationFrames[v].list);
                  setSorted(animationFrames[v].sorted);
                  setCompares(animationFrames[v].compares);
                  setSwaps(animationFrames[v].swaps);
                  if (v === animationFrames.length - 1) {
                    clearInterval(interval);
                    setAnimation(null);
                  }
                  return v;
                });
              }, 300);
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
        <br />
        p1: {p1}
        <br />
        p2 : {p2}
      </div>
    </div>
  );
}
