import { Mic } from "@mui/icons-material";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <div className="bg-white w-1/3 p-2 rounded-full flex items-center gap-x-4 px-4">
      <SearchIcon />
      <input
        placeholder="Search Google or type a URL"
        className="outline-none rounded-full border-none w-full"
      />
      <Mic />
      <CenterFocusStrongIcon />
    </div>
  );
};

export default SearchBar;
