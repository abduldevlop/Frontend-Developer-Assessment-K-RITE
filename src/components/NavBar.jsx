import { IoIosSearch } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { IoChatbubblesOutline } from "react-icons/io5";

const NavBar = ({ searchText, setSearchText }) => {
  return (
    <nav className="flex items-center justify-between px-5">
      <h1 className="text-2xl font-medium">Products</h1>
      <div className="flex items-center gap-5">
        <div className="flex items-center border border-gray-200 px-3 py-1 rounded-xl cursor-pointer">
          <IoIosSearch size={20} />
          <input
            type="text"
            placeholder="Search for..."
            className="outline-none pl-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="border border-gray-200 p-2 rounded-xl cursor-pointer">
          <IoChatbubblesOutline size={20} />
        </div>
        <div className="border border-gray-200 p-2 rounded-xl cursor-pointer">
          <FiSettings size={20} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
