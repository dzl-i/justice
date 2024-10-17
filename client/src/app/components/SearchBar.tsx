import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <>
      <div className="relative" style={{ width: "65vw" }}>
        <input
          className="bg-[hsl(0,0%,93%)] rounded border-2 border-black w-full h-10 pl-10 font-spartan leading-tight focus:outline-none focus:bg-[hsl(0,0%,98%)] focus:border-[darkGreen]"
          placeholder="Search..."
          type="text"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        />
      </div>
    </>
  );
}

export default SearchBar;
