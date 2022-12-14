import { Outlet } from "react-router-dom";
import "./App.css";
import Category from "./components/Category";
import CategoryMenu from "./components/CategoryMenu";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";

function App() {
  // TODO: MEDIUM SIZE
  return (
    <div className="m-auto lg:pt-10 lg:pb-10 lg:flex lg:justify-center lg:bg-[#616A92]  ">
      <div className="w-[375px] bg-white lg:w-[1273px] lg:h-[1000px]  lg:rounded-3xl">
        <Navbar />
        <Category />
        <div className="lg:flex lg:gap-10">
          <Filter />
          <div className="lg:w-[874px] ">
            <CategoryMenu />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
