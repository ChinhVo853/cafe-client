import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TrangChu from "./TrangChu/TrangChu";
import Menu from "./Menu/Menu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TrangChu />} />
      <Route path="/Menu" element={<Menu />} />
    </Routes>
  );
}

export default App;
