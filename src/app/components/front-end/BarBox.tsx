export default function BarBox(props: {
  value: number;
  order: number;
  highlight: boolean;
  markComplete: boolean;
  height: number;
}) {
  return (
    <div
      className={`${props.highlight ? "green-border" : ""} ${
        props.markComplete ? "green-bg" : ""
      } bar-box`}
      style={{ height: `${props.height * 5}px` }}
      data-value={`${props.value}`}
    ></div>
  );
}
