"use client";

import { useRef, useState } from "react";

export default function BubbleSortControlBox(props: {
  setList: Function;
  reset: Function;
  setStep: Function;
  makeAnimation: Function;
  setOrders: Function;
}) {
  const listSizeRef = useRef(null);
  const [listSize, setListSize] = useState(10);
  const formatValue = (n: number, v: string | number): string => {
    v = "" + v;
    while (v.length < n) v = "0" + v;
    return v;
  };
  return (
    <div className="bubblesort-control-box control-box">
      <label
        data-area="label-list-controls"
        style={{ gridArea: "label-list-controls", textAlign: "center" }}
      >
        List Controls
      </label>
      <label
        data-area="label-size"
        className="bubblesort-label"
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
          props.setList(
            Array.from({ length: parseInt(e.target.value) }, (_, i) => i + 1)
          );
          props.setOrders(
            Array.from({ length: parseInt(e.target.value) }, (_, i) => i)
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
        className="bubblesort-label"
        style={{ gridArea: "label-randomize" }}
      >
        Randomize List
      </label>
      <button
        data-area="input-randomize"
        className="bubblesort-input"
        style={{ gridArea: "input-randomize" }}
      >
        Randomize
      </button>
      <label
        data-area="label-shuffle"
        className="bubblesort-label"
        style={{ gridArea: "label-shuffle" }}
      >
        Shuffle List
      </label>
      <button
        data-area="input-shuffle"
        className="bubblesort-input"
        style={{ gridArea: "input-shuffle" }}
      >
        Shuffle
      </button>
    </div>
  );
}
