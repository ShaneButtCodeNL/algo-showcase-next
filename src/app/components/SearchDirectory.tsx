import Link from "next/link";
import CollapsableCard from "./front-end/ColapsableCard";

export default function SearchDirectory() {
  return (
    <CollapsableCard title="Search" link="/search">
      <ul className="directory">
        <li className="directory-link">
          <Link href="/search/linear">Linear</Link>
        </li>
        <li className="directory-link">
          <Link href="/search/binary">Binary Search</Link>
        </li>
      </ul>
    </CollapsableCard>
  );
}
