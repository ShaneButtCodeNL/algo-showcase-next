export default function NumberBox(props: {
  value: number;
  order: number;
  highlight: boolean;
  markComplete: boolean;
}) {
  return (
    <div
      className={`${props.highlight ? "green-border" : ""} ${
        props.markComplete ? "green-bg" : ""
      } number-box `}
    >
      {props.value}
    </div>
  );
}
