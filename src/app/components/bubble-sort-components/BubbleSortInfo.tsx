export default function BubbleSortInfo(props: {
  p1: number;
  p2: number;
  swaps: number;
  compares: number;
  frame: number;
  totalFrames: number;
}) {
  const formatNumber = (n: number) => {
    const limit = `${props.totalFrames}`.length;
    const repeat = limit - `${n}`.length;
    return `${"0".repeat(repeat)}${n}`;
  };
  return (
    <div className="bubble-sort-info-box">
      <div
        style={{
          gridArea: "title",
          margin: "auto",
          textDecoration: "underline",
        }}
      >
        Information
      </div>
      <div className="bubble-sort-col" style={{ gridArea: "left" }}>
        <div
          style={{
            gridArea: "top-left",
            marginLeft: "auto",
            marginRight: "0.5rem",
          }}
        >
          Index 1 :
        </div>
        <div style={{ gridArea: "top-right" }}>
          {props.p1 === -1 ? undefined : props.p1}
        </div>
        <div
          style={{
            gridArea: "mid-left",
            marginLeft: "auto",
            marginRight: "0.5rem",
          }}
        >
          Swaps :
        </div>
        <div style={{ gridArea: "mid-right" }}>{props.swaps}</div>
        <div
          style={{
            gridArea: "bot-left",
            marginLeft: "auto",
            marginRight: "0.5rem",
          }}
        >
          Current Frame :
        </div>
        <div style={{ gridArea: "bot-right" }}>{formatNumber(props.frame)}</div>
      </div>
      <div className="bubble-sort-col" style={{ gridArea: "right" }}>
        <div
          style={{
            gridArea: "top-left",
            marginLeft: "auto",
            marginRight: "0.5rem",
          }}
        >
          Index 2 :
        </div>
        <div style={{ gridArea: "top-right" }}>
          {props.p2 === -1 ? " " : props.p2}
        </div>
        <div
          style={{
            gridArea: "mid-left",
            marginLeft: "auto",
            marginRight: "0.5rem",
          }}
        >
          Compares :
        </div>
        <div style={{ gridArea: "mid-right" }}>{props.compares}</div>
        <div
          style={{
            gridArea: "bot-left",
            marginLeft: "auto",
            marginRight: "0.5rem",
          }}
        >
          total Frames :
        </div>
        <div style={{ gridArea: "bot-right" }}>{props.totalFrames}</div>
      </div>
    </div>
  );
}
