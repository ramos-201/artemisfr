import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from './pages/login';
import RegisterUserPage from './pages/RegisterUser';
import AppRoutes from "./Routes";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.login} element={<LoginPage />} />
        <Route path={AppRoutes.registerUser} element={<RegisterUserPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
