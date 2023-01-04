import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";

const Home = () => {
  // const data = useContext(AppContext);
  const { openModal, openSidebar } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars onClick={openSidebar} />
      </button>
      <button onClick={openModal} className="btn">
        Show Modal
      </button>
    </main>
  );
};

export default Home;
