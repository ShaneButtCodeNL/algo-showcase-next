export default function BarBox(props: {
  value: number;
  order: number;
  highlight: boolean;
  markComplete: boolean;
}) {
  return (
    <div
      className={`${props.highlight ? "green-border" : ""} ${
        props.markComplete ? "green-bg" : ""
      } bar-box`}
      style={{ order: props.order, height: `${props.value * 30}px` }}
      data-value={`${props.value}`}
    ></div>
  );
}
