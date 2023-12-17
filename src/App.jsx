import "./App.css";
import About from "./components/About.jsx";
import Interest from "./components/Interest.jsx";
import Footer from "./components/Footer.jsx";
import Info from "./components/Info.jsx";

function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}

export default App;
