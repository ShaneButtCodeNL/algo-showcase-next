import CollapsableCard from "./front-end/ColapsableCard";
import SortDirectory from "./SortDirectory";
import SearchDirectory from "./SearchDirectory";

export default function Directory() {
  return (
    <div>
      <CollapsableCard title="Directory">
        <ul className="directory">
          <li className="directory-link">
            <SortDirectory />
          </li>
          <li className="directory-link">
            <SearchDirectory />
          </li>
        </ul>
      </CollapsableCard>
    </div>
  );
}
