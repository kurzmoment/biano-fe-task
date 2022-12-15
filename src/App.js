import { Outlet } from "react-router-dom";
import "./App.css";
import Category from "./components/Category";
import CategoryMenu from "./components/CategoryMenu";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";

function App() {
  // TODO: MEDIUM SIZE
  return (
    <div className="m-auto xl:pt-10 xl:pb-10 xl:flex xl:justify-center xl:bg-[#616A92] md:flex md:justify-center ">
      <div className="w-[375px] bg-white xl:w-[1273px] xl:h-[1000px] xl:rounded-3xl md:w-full ">
        <Navbar />
        <Category />
        <div className="xl:flex xl:gap-10 md:flex md:gap-10">
          <Filter />
          <div className="xl:w-[874px] md:w-[600px] lg:w-[770px] ">
            <CategoryMenu />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
