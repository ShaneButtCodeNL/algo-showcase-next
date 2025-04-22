import { useState } from "react";
import NumberBox from "./NumberBox";

export default function NumberList(props: {
  list: Array<number>;
  orders: Array<number>;
  compare: Array<number>;
}) {
  let baseList = props.list.map((v, i) => [v, props.orders[i]]);
  const [list, setList] = useState([...baseList]);
  return (
    <div className="number-list horizontal-list">
      {list.map(([value, order], i) => (
        <NumberBox
          key={`number-box-${value}-${i}`}
          order={order}
          value={value}
          compare={props.compare.includes(order)}
        />
      ))}
    </div>
  );
}
