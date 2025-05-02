import BarBox from "./BarBox";

export default function BarList(props: {
  list: Array<number>;
  orders: Array<number>;
  highlights: Array<number>;
  markComplete: Array<number>;
}) {
  const max = Math.max(...props.list);
  return (
    <div className="bar-list horizontal-list">
      {props.list.map((v, i) => (
        <BarBox
          key={`bar-box-${v}-${i}`}
          order={props.orders[i]}
          value={v}
          highlight={props.highlights.includes(i)}
          markComplete={props.markComplete.includes(i)}
          height={Math.max(1, Math.floor((v / max) * 100))}
        />
      ))}
    </div>
  );
}
