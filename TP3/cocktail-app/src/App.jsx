import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CocktailDetail from "./pages/CocktailDetail";
import FavoritesPage from "./pages/FavoritesPage";
import Header from "./components/Header";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="main-container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cocktail/:id" element={<CocktailDetail />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;