import { MdOutlineBorderAll } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { MdOutlineAddBox } from "react-icons/md";
import { BiSolidFileImport } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { FaRegFileArchive } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { MdExpandMore } from "react-icons/md";
import { MdFilterList } from "react-icons/md";

import { tableData } from "../data";
import { useState } from "react";

const MainSection = ({ searchText }) => {
  const [selectedBrand, setSelectedBrand] = useState("All brands");
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (item) => {
    // If the item is already checked, remove it from the checkedItems array
    if (checkedItems.includes(item)) {
      setCheckedItems(
        checkedItems.filter((checkedItem) => checkedItem !== item)
      );
    } else {
      // If the item is not checked, add it to the checkedItems array
      setCheckedItems([...checkedItems, item]);
    }
  };

  const brandTitles = [
    "All brands",
    ...tableData.map((data) => data.brand.title),
  ];

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const filteredData = tableData.filter((data) => {
    const brandMatches =
      selectedBrand === "All brands" || data.brand.title === selectedBrand;
    const searchTextMatches = data.brand.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return brandMatches && searchTextMatches;
  });

  return (
    <main className="p-5">
      <div className="flex justify-between items-center text-[14px] ">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border border-gray-200 px-2 py-1 rounded-md cursor-pointer w-fit">
            <MdOutlineBorderAll size={20} />
            <select value={selectedBrand} onChange={handleBrandChange}>
              {brandTitles.map((title, index) => (
                <option key={index}>{title}</option>
              ))}
            </select>
            <MdArrowDropDown />
          </div>
          <div className="flex items-center gap-2 border border-gray-200 px-2 py-1 rounded-md cursor-pointer w-fit">
            Desk
            <MdArrowDropDown />
          </div>
          <div className="flex items-center gap-2 border border-gray-200 px-2 py-1 rounded-md cursor-pointer w-fit">
            Desk
            <MdArrowDropDown />
          </div>
          <div className="flex items-center gap-2 border border-gray-200 px-2 py-1 rounded-md cursor-pointer w-fit">
            <FaArrowDownWideShort size={15} />
            Short
            <MdArrowDropDown />
          </div>
          <div className="flex items-center gap-2 border border-gray-200 px-2 py-1 rounded-md cursor-pointer w-fit">
            <MdFilterList size={20} />
            Filter
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border border-gray-200 px-2 py-1 rounded-md cursor-pointer w-fit">
            <MdOutlineAddBox size={20} />
            Metting
          </div>
          <div className="flex items-center gap-2 border border-gray-200 px-2 py-1 rounded-md cursor-pointer w-fit">
            <BiSolidFileImport size={20} />
            Import/Export
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col justify-between items-center h-full">
        <table className="w-full text-[14px] text-center border-collapse border border-gray-300 ">
          <thead>
            <tr className="text-gray-500  ">
              <th className="border border-gray-300 p-2 flex items-center justify-between border-none font-medium">
                Brand
                <IoMdAdd size={20} className="cursor-pointer" />
              </th>
              <th className="border border-gray-300 p-2  font-medium text-start ">
                Description
              </th>
              <th className="border border-gray-300 p-2 font-medium text-start">
                Members
              </th>
              <th className="border border-gray-300 p-2 font-medium text-start">
                Categories
              </th>
              <th className="border border-gray-300 p-2 font-medium text-start">
                Tags
              </th>
              <th className="border border-gray-300 p-2 font-medium text-start">
                Next meeting
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="flex items-center gap-2 ml-10 border-r border-gray-300 p-2">
                  <input
                    type="checkbox"
                    checked={checkedItems.includes(data.brand.title)}
                    onChange={() => handleCheckboxChange(data.brand.title)}
                  />
                  <img
                    src={data.brand.image}
                    alt={data.brand.title}
                    className="w-6 h-6 rounded-md"
                  />
                  <span>{data.brand.title}</span>
                </td>
                <td className="border-r border-gray-300 p-2">
                  {data.description}
                </td>
                <td className="relative border-r border-gray-300 p-2">
                  {data.members.map((member, index) => (
                    <img
                      key={member.id}
                      src={member.img}
                      alt={member.img}
                      className="absolute w-4 h-4 rounded-full top-2  ml-2 "
                      style={{
                        left: `${index * 10}px`, // Adjust the multiplier as needed for positioning
                      }}
                    />
                  ))}
                </td>
                <td className="text-[10px] border-r border-gray-300 p-2 flex  items-center gap-1">
                  {data.categories.map((cat, index) => (
                    <p
                      key={index}
                      className="rounded-md w-fit px-2 "
                      style={{ backgroundColor: `#${cat.color}` }}
                    >
                      <span>{cat.title}</span>
                    </p>
                  ))}
                </td>
                <td className=" border-r border-gray-300 p-2 ">
                  {data.tags.map((tag, index) => (
                    <p
                      key={index}
                      className="bg-[#EDEDEE] w-fit p-1 rounded-md text-[10px]"
                    >
                      #{tag}
                    </p>
                  ))}
                </td>
                <td className="border-r border-gray-300 p-2">
                  <p
                    className="rounded-md w-fit px-2 text-[10px]"
                    style={{ backgroundColor: `#${data.nextMeeting.color}` }}
                  >
                    {data.nextMeeting.time}
                  </p>
                </td>
              </tr>
            ))}

            <td className="border-r  text-right pr-5 font-medium ">
              {filteredData.length} count
            </td>
            <td className="flex justify-center gap-1 items-center text-[14px] p-2 text-gray-500 font-medium border-r cursor-auto">
              <IoMdAdd size={20} />
              Add collections
            </td>
            <td className="text-[14px] p-2 text-gray-500 font-medium border-r">
              <p className="flex items-center gap-1 cursor-pointer ">
                <IoMdAdd size={20} />
                Add collections
              </p>
            </td>
            <td className="text-[14px] p-2 text-gray-500 font-medium border-r">
              <p className="flex items-center gap-1 cursor-pointer ">
                <IoMdAdd size={20} />
                Add collections
              </p>
            </td>
            <td className="text-[14px] p-2 text-gray-500 font-medium border-r">
              <p className="flex items-center gap-1 cursor-pointer ">
                <IoMdAdd size={20} />
                Add collections
              </p>
            </td>
          </tbody>
        </table>

        {checkedItems.length > 0 && (
          <div className="mb-4  border px-3 py-2 mt-[20px] rounded-xl flex gap-5 items-center text-[13px]">
            <div className="flex items-center gap-1   ">
              <p className="text-white bg-black px-1 rounded-md">
                {checkedItems.length}
              </p>
              <span>selected</span>
            </div>

            <div className="flex gap-2 items-center border px-2 py-1 rounded-xl font-medium cursor-pointer">
              <FaRegFileArchive size={20} />
              Archive
            </div>
            <div className="flex gap-2 items-center border px-2 py-1 rounded-xl font-medium text-red-800 cursor-pointer ">
              <AiOutlineDelete size={20} />
              Delete
            </div>
            <div className="flex gap-2 items-center border px-2 py-1 rounded-xl font-medium  cursor-pointer ">
              <MdExpandMore size={20} />
              More
            </div>
            <IoMdClose
              size={20}
              className="cursor-pointer"
              onClick={() => setCheckedItems([])}
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default MainSection;
