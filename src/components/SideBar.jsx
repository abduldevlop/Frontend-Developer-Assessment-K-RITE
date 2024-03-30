import React, { useState } from "react";

import { IoLogoDesignernews } from "react-icons/io5";
import { SiCoinmarketcap } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { MdOutlineFolder } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";

import { profile } from "../assets";
import { floders } from "../data";

export const teams = [
  {
    id: 1,
    title: "Design Team",
    icon: <IoLogoDesignernews />,
    number: 1,
  },
  {
    id: 2,
    title: "Marketing Team",
    icon: <SiCoinmarketcap />,
    number: 2,
  },
  {
    id: 3,
    title: "Development Team",
    icon: <FaCode />,
    number: 3,
  },
];

const SideBar = () => {
  const [teamSelect, setTeamSelect] = useState("");

  const [openFolder, setOpenFolder] = useState(null); // Updated state to hold the ID of the open folder

  return (
    <aside>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="logo" className="w-12 h-12 rounded-md" />
            <div>
              <p className="text-gray-500 text-[14px]">INC</p>
              <h3 className="font-semibold">InnovatedHub</h3>
            </div>
          </div>
          <img src={profile} alt="" className="w-8 h-8 rounded-full" />
        </div>
        <div className="p-2 mt-2">
          {teams.map((team) => (
            <div
              onClick={() => setTeamSelect(team.title)}
              key={team.id}
              className={`flex items-center justify-between cursor-pointer  hover:bg-[#F4F5F7] p-2 mb-2 hover:rounded-md ${
                teamSelect == team.title ? "bg-[#F4F5F7]" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <span> {team.icon} </span>
                <h1> {team.title} </h1>
              </div>
              <div className="text-[12px] border-1 bg-[#F4F5F7]  p-1 rounded-md">
                <span className="bg-white">X + {team.number}</span>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-2 text-gray-500 ml-2 cursor-pointer">
            <MdOutlineAddBox size={20} />
            <span className="text-[14px]">Create a team</span>
          </div>
        </div>

        <div className="p-2 mt-2">
          <div className="flex items-center justify-between text-[14px] mb-2 text-gray-500 cursor-pointer">
            <p>FOLDERS</p>
            <IoMdAdd size={20} />
          </div>
          <div className="flex gap-2 flex-col">
            {floders.map((folder) => (
              <div
                key={folder.id}
                onClick={() =>
                  setOpenFolder((prevFolderId) =>
                    prevFolderId === folder.id ? null : folder.id
                  )
                }
              >
                <div
                  className={`flex items-center justify-between cursor-pointer hover:bg-[#F4F5F7] p-2 rounded-md ${
                    folder.id == openFolder ? "bg-[#F4F5F7]" : ""
                  } `}
                >
                  <span key={folder.id} className={`flex items-center gap-2 `}>
                    <MdOutlineFolder size={20} /> {folder.name}
                  </span>
                  <IoMdArrowDropdown />
                </div>
                <div>
                  {openFolder == folder.id ? (
                    <div>
                      {folder.items.length > 0 ? (
                        folder.items.map((item) => (
                          <p key={item.id} className="ml-5 mt-2 text-[14px]">
                            {item.title}
                          </p>
                        ))
                      ) : (
                        <p className="ml-5 mt-2 text-[14px] text-gray-600">
                          No file
                        </p>
                      )}
                      <div className="flex items-center gap-2 text-gray-500 ml-5 mt-2 cursor-pointer">
                        <MdOutlineAddBox size={20} />
                        <span className="text-[14px]">Add a new file</span>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="flex items-center gap-2 mt-5 mb-2 cursor-pointer">
            <IoPersonAddOutline size={20} />
            Invite teammates
          </p>
          <p className="flex items-center gap-2 cursor-pointer my-3">
            <IoMdHelpCircleOutline size={20} />
            Help and firts steps
          </p>
          <p className="flex items-center gap-5 text-[14px] bg-[#F4F5F7] p-4">
            7 days left on free trial
            <button className="bg-black text-white px-2 md:p-0 py-1 rounded-md text-[12px] cursor-pointer ">
              Add billing
            </button>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
