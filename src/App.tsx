import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="recipe/:id" element={<RecipeDetail />} />
    </Routes>
  );
}

export default App;
