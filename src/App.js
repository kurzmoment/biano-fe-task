import "./App.css";
import Category from "./components/Category";
import CategoryMenu from "./components/CategoryMenu";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="m-auto md:pt-10 md:pb-10 md:flex md:justify-center md:bg-[#616A92]  ">
      <div className="w-[375px] bg-white md:w-[1273px] md:h-[1000px]  md:rounded-3xl">
        <Navbar />
        <Category />
        <div className="md:flex md:gap-10">
          <Filter />
          <div className="md:w-[874px] ">
            <CategoryMenu />
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
