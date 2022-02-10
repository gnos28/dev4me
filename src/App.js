import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  document.title = "DEV4.me";
  document.body.classList.add("fill-window");
  document.getElementById("root").classList.add("fill-window");

  return (
    <div className="p-0 main-container">
      <TopBar />
      <div className="SidebarBodyFooter">
          <SideBar />
        <div className="bodyAndFooter bg-danger">
          <Body />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
