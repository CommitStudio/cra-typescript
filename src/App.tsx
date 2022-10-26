import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HowOldIn2030TS from "./pages/HowOldIn2030TS";
import HowOldIn2030JS from "./pages/HowOldIn2030JS";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/how-old-i-will-be-in-2030-JS"
          element={<HowOldIn2030JS />}
        />
        <Route
          path="/how-old-i-will-be-in-2030-TS"
          element={<HowOldIn2030TS />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
