import "./App.css";
import Category from "./components/Category";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="m-auto mt-10 w-[375px]">
      <Navbar />
      <Category />
    </div>
  );
}

export default App;
