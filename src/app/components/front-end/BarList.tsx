import BarBox from "./BarBox";

export default function BarList(props: {
  list: Array<number>;
  orders: Array<number>;
  highlights: Array<number>;
  markComplete: Array<number>;
}) {
  return (
    <div className="bar-list horizontal-list">
      {props.list.map((v, i) => (
        <BarBox
          key={`bar-box-${v}-${i}`}
          order={props.orders[i]}
          value={v}
          highlight={props.highlights.includes(props.orders[i])}
          markComplete={props.markComplete.includes(i)}
        />
      ))}
    </div>
  );
}
