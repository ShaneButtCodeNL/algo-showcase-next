import Link from "next/link";
import CollapsableCard from "./front-end/ColapsableCard";

export default function SortDirectory() {
  return (
    <CollapsableCard title="Sorting" link="/sorting">
      <ul className="directory">
        <li className="directory-link">
          <Link href="/sorting/bubble-sort">Bubble Sort</Link>
        </li>
        <li className="directory-link">
          <Link href="/sorting/insertion-sort">Insertion Sort</Link>
        </li>
        <li className="directory-link">
          <Link href="/sorting/selection-sort">Selection Sort</Link>
        </li>
        <li className="directory-link">
          <Link href="/sorting/quick-sort">Quick Sort</Link>
        </li>
        <li className="directory-link">
          <Link href="/sorting/merge-sort">Merge Sort</Link>
        </li>
      </ul>
    </CollapsableCard>
  );
}
