import { Routes, Route } from 'react-router-dom';
import { LoginPage } from 'pages/LoginPage';
import { Counter } from './Counter';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Counter />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element />
        </Route>
      </Routes>
    </div>
  );
};
