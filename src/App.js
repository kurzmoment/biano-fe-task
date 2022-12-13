import "./App.css";
import Category from "./components/Category";
import CategoryMenu from "./components/CategoryMenu";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="m-auto mt-10 w-[375px]">
      <Navbar />
      <Category />
      <CategoryMenu />
      <Products />
    </div>
  );
}

export default App;
