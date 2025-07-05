import { Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/main/mainPage";
import { GamePage } from "./pages/game/gamePage";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/game" element={<GamePage />} />
        </Routes>
    );
};