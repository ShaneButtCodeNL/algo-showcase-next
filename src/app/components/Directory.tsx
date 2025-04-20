import Link from "next/link";
import CollapsableCard from "./front-end/ColapsableCard";

export default function Directory() {
  return (
    <div>
      <CollapsableCard title="Directory">
        <ul className="directory">
          <li className="directory-link">
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
          </li>
          <li className="directory-link">
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
          </li>
        </ul>
      </CollapsableCard>
    </div>
  );
}
