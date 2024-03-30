import React, { useState } from "react";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";

const App = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="app-container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="content-container">
        <NavBar setSearchText={setSearchText} searchText={searchText} />
        <MainSection searchText={searchText} />
      </div>
    </div>
  );
};

export default App;
