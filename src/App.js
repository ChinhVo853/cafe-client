import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TrangChu from "./TrangChu/TrangChu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TrangChu />} />;
    </Routes>
  );
}

export default App;
