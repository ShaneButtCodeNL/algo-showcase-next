import Link from "next/link";
import CollapsableCard from "./components/front-end/ColapsableCard";
import Directory from "./components/Directory";

export default function Home() {
  return (
    <>
      <h1>Welcome To the Algorithm Showcase</h1>
      <div>
        This is a project that dynamically animates some algoritms to show how
        they work
      </div>
      <Directory />
    </>
  );
}
