import NumberBox from "./NumberBox";

export default function NumberList(props: {
  list: Array<number>;
  orders: Array<number>;
  highlights: Array<number>;
  markComplete: Array<number>;
}) {
  return (
    <div className="number-list horizontal-list">
      {props.list.map((value, i) => (
        <NumberBox
          key={`number-box-${value}-${i}`}
          order={props.orders[i]}
          value={value}
          highlight={props.highlights.includes(i)}
          markComplete={props.markComplete.includes(i)}
        />
      ))}
    </div>
  );
}
