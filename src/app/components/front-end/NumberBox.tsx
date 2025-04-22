export default function NumberBox(props: {
  value: number;
  order: number;
  compare: boolean;
}) {
  return (
    <div
      className={`${props.compare ? "green-border" : ""} number-box `}
      style={{ order: props.order }}
    >
      {props.value}
    </div>
  );
}
