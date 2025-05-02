"use client";

import bubbleSortAlgo from "@/app/algorithm-code/bubbleSortAlgo";
import { times } from "@/constants";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import NumberList from "../front-end/NumberList";
import BarList from "../front-end/BarList";
import BubbleSortControlBox from "./BubbleSortControlBox";

export default function BubbleSortDisplay(props: any) {
  let sampleList = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const [animationFrames, setAnimationFrames] = useState(
    bubbleSortAlgo(sampleList)
  );

  const [orders, setOrders] = useState(animationFrames[0].orders);
  const [ren, rerender] = useState(false);
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
  const pause = () => {
    if (animation) {
      clearInterval(animation);
      setAnimation(null);
    }
  };
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
  const nextFrame = () => {
    setStep((v) => Math.min(v + 1, animationFrames.length - 1));
  };
  const prevFrame = () => setStep((v) => Math.max(0, v - 1));
  const makeAnimation = (time = 300) => {
    if (animation === null) {
      var interval = setInterval(() => {
        setStep((v) => (v += 1));
      }, time);
      setAnimation(interval);
    }
  };
  const updateList = (arr: Array<number>) => {
    setAnimationFrames([...bubbleSortAlgo(arr)]);
    setList([...arr]);
    rerender((e) => !e);
  };
  const suffleList = () => {
    if (!list) return;
    const newList = list
      .map((v) => [v, Math.random()])
      .sort((a, b) => a[1] - b[1])
      .map((v) => v[0]);
    updateList(newList);
  };
  useEffect(() => {
    setP1(animationFrames[step].p1);
    setP2(animationFrames[step].p2);
    setList(animationFrames[step].list);
    setSorted(animationFrames[step].sorted);
    setCompares(animationFrames[step].compares);
    setSwaps(animationFrames[step].swaps);
    if (animation && step === animationFrames.length - 1) {
      clearInterval(animation);
      setAnimation(null);
    }
  }, [step]);
  useEffect(() => {
    setStep(0);
  }, [animationFrames]);
  return (
    <div className="main-content-wrapper">
      <p>
        bubbleSort {ren ? "1-" : "2-"}
        {step}
      </p>
      <BubbleSortControlBox
        updateList={updateList}
        reset={reset}
        setStep={setStep}
        makeAnimation={makeAnimation}
        pause={pause}
        nextFrame={nextFrame}
        prevFrame={prevFrame}
        lastFrame={() => setStep(animationFrames.length - 1)}
        setOrders={setOrders}
        displayNumbers={displayNumbers}
        setDisplayNumbers={setDisplayNumbers}
        shuffleList={suffleList}
        isAnimated={animation !== null}
      />
      {displayNumbers ? (
        <NumberList
          list={list}
          orders={orders}
          highlights={[p1, p2]}
          markComplete={sorted}
        />
      ) : (
        <BarList
          list={list}
          orders={orders}
          highlights={[p1, p2]}
          markComplete={sorted}
        />
      )}
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
        <br />
        total frames: {animationFrames.length}
      </div>
    </div>
  );
}
