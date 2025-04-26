export default function BubbleSortControlBox(props: {
  setList: Function;
  reset: Function;
  setStep: Function;
  makeAnimation: Function;
}) {
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
        List Size
      </label>
      <input
        type="number"
        max={100}
        min={1}
        defaultValue={10}
        data-area="input-size"
        className="bubblesort-input"
        style={{ gridArea: "input-size" }}
      />
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
