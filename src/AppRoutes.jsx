import { Route, Routes } from 'react-router-dom';
import { StartPage } from './pages/start/startPage';
import { GamePage } from './pages/game/gamePage';
import { ResultPage } from './pages/result/resultPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
};
