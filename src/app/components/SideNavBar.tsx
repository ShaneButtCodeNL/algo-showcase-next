"use client";
export default function SideNavBar(props: any) {
  const openString = "<";
  const closeString = ">";
  const hiddenSBStyle = { margin: 0, transition: "margin 0s 280ms" };
  return (
    <>
      <div
        className="sidebar-content"
        style={props.showSB ? {} : hiddenSBStyle}
      >
        content
      </div>
      <button
        className="sidebar-slider"
        onClick={() => props.setShowSB((e: any) => !e)}
        style={{ width: "1rem" }}
      >
        {props.showSB ? openString : closeString}
      </button>
    </>
  );
}
