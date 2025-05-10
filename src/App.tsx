import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import MyRecipes from "./pages/MyRecipes";
import Results from "./pages/Results";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/results" element={<Results />} />
      <Route path="/my-recipes" element={<MyRecipes />} />
    </Routes>
  );
}

export default App;
