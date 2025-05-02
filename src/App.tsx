import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import MyRecipes from "./pages/MyRecipes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="recipe/:id" element={<RecipeDetail />} />
      <Route path="my-recipes" element={<MyRecipes />} />
    </Routes>
  );
}

export default App;
