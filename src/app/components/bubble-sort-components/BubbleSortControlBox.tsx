"use client";

import { useRef, useState } from "react";
import styles from "./BubbleSortControlBox.module.css"

export default function BubbleSortControlBox(props: {
  updateList: Function;
  reset: Function;
  setStep: Function;
  makeAnimation: Function;
  setOrders: Function;
  displayNumbers: boolean;
  setDisplayNumbers: Function;
  pause: Function;
  lastFrame: Function;
  nextFrame: Function;
  prevFrame: Function;
  shuffleList: Function;
  isAnimated: boolean;
}) {
  const listSizeRef = useRef(null);
  const [listSize, setListSize] = useState(10);
  const formatValue = (n: number, v: string | number): string => {
    v = "" + v;
    while (v.length < n) v = "0" + v;
    return v;
  };
  return (
    <div className={styles.bubblesortControlBox}>
      <label
        data-area="label-list-controls"
        style={{ gridArea: "label-list-controls", textAlign: "center" ,textDecoration:"underline"}}
      >
        List Controls
      </label>
      <label
        data-area="label-size"
        className={styles.label}
        style={{ gridArea: "label-size" }}
      >
        List Size : {`${formatValue(3, listSize)}`}
      </label>
      <input
        type="range"
        name="list-size"
        ref={listSizeRef}
        max={100}
        min={1}
        defaultValue={10}
        data-area="input-size"
        className="bubblesort-input"
        style={{ gridArea: "input-size" }}
        list="list-size-values"
        onChange={(e) => {
          setListSize(parseInt(e.target.value));
          props.updateList(
            Array.from({ length: parseInt(e.target.value) }, (_, i) => i + 1)
          );
        }}
      />
      <datalist id="list-size-values">
        <option value="1" label="1"></option>
        <option value="25" label="25"></option>
        <option value="50" label="50"></option>
        <option value="75" label="75"></option>
        <option value="100" label="100"></option>
      </datalist>
      <label
        data-area="label-randomize"
        className={styles.label}
        style={{ gridArea: "label-randomize" }}
      >
        Randomize List
      </label>
      <button
        data-area="input-randomize"
        className="bubblesort-input"
        style={{ gridArea: "input-randomize" }}
        onClick={(_) => {
          props.updateList(
            Array.from({ length: listSize }, (_) =>
              Math.ceil(100 * Math.random())
            )
          );
        }}
      >
        Randomize
      </button>
      <label
        data-area="label-shuffle"
        className={styles.label}
        style={{ gridArea: "label-shuffle" }}
      >
        Shuffle List
      </label>
      <button
        data-area="input-shuffle"
        className="bubblesort-input"
        style={{ gridArea: "input-shuffle" }}
        onClick={(_) => {
          props.shuffleList();
        }}
      >
        Shuffle
      </button>
      <label className={styles.label} style={{ gridArea: "label-display" }}>
        Display{" "}
      </label>
      <button
        style={{ gridArea: "input-display" }}
        onClick={(e) => {
          e.preventDefault();
          props.setDisplayNumbers((e: any) => !e);
        }}
      >
        {props.displayNumbers ? "Bars" : "Numbers"}
      </button>
      {props.isAnimated ? (
        <button style={{ gridArea: "play" }} onClick={() => props.pause()}>
          stop
        </button>
      ) : (
        <button
          style={{ gridArea: "play" }}
          onClick={() => props.makeAnimation()}
        >
          play
        </button>
      )}
      <button style={{ gridArea: "reset" }} onClick={() => props.reset()}>
        reset
      </button>
      <button style={{ gridArea: "next" }} onClick={() => props.nextFrame()}>
        forward
      </button>
      <button style={{ gridArea: "prev" }} onClick={() => props.prevFrame()}>
        Back
      </button>
      <button style={{ gridArea: "end" }} onClick={() => props.lastFrame()}>
        End
      </button>
    </div>
  );
}
