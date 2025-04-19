import Link from "next/link";
import CollapsableCard from "./components/front-end/ColapsableCard";

export default function Home() {
  return (
    <>
      <h1>Welcome To the Algorithm Showcase</h1>
      <div>
        This is a project that dynamically animates some algoritms to show how
        they work
      </div>
      <div>
        <CollapsableCard title="Directory">
          <ul id="main-directory" className="directory">
            <li id="main-directory-sort">
              <CollapsableCard title="Sorting" link="/sorting">
                <ul id="sort-directory" className="directory">
                  <li id="sort-directory-bubble-sort">
                    <Link href="/sorting/bubble-sort">Bubble Sort</Link>
                  </li>
                  <li id="sort-directory-insertion-sort">
                    <Link href="/sorting/insertion-sort">Insertion Sort</Link>
                  </li>
                  <li id="sort-directory-selection-sort">
                    <Link href="/sorting/selection-sort">Selection Sort</Link>
                  </li>
                  <li id="sort-directory-quick-sort">
                    <Link href="/sorting/quick-sort">Quick Sort</Link>
                  </li>
                  <li id="sort-directory-merge-sort">
                    <Link href="/sorting/merge-sort">Merge Sort</Link>
                  </li>
                </ul>
              </CollapsableCard>
            </li>
            <li id="main-directory-search">
              <CollapsableCard title="Search" link="/search">
                <ul id="search-directory" className="directory">
                  <li id="search-dirctory-linear">
                    <Link href="/search/linear">Linear</Link>
                  </li>
                  <li>
                    <Link href="/search/binary">Binary Search</Link>
                  </li>
                </ul>
              </CollapsableCard>
            </li>
          </ul>
        </CollapsableCard>
      </div>
    </>
  );
}
