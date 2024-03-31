import "./layout.scss";
import Navbar from "./layouts/navbar/Navbar";
import Home from "./pages/home/Home";


const App = () => {
  return (
    <div className="layout">
      <div className="navigation__bar">
        <Navbar />
      </div>
      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;
