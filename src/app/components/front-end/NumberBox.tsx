export default function NumberBox(props: {
  value: number;
  order: number;
  compare: boolean;
  markComplete: boolean;
}) {
  return (
    <div
      className={`${props.compare ? "green-border" : ""} ${
        props.markComplete ? "green-bg" : ""
      } number-box `}
      style={{ order: props.order }}
    >
      {props.value}
    </div>
  );
}
