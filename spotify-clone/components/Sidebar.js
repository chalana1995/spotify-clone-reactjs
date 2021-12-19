import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div>
      <button>
        <HomeIcon className="w-5 h-5" />
        <p>Home</p>
      </button>
      <button>
        <SearchIcon className="w-5 h-5" />
        <p>Search</p>
      </button>
      <button>
        <LibraryIcon className="w-5 h-5" />
        <p>Your library</p>
      </button>
    </div>
  );
}

export default Sidebar;
