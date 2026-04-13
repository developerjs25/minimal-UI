import SigninPage from "./pages/signin";
import AppRoutes from "./routes/routes";
import { Routes, Route, Navigate } from "react-router-dom";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin/*" element={<SigninPage />} />
        <Route path="/app/*" element={<AppRoutes />} />

      </Routes>
    </>
  );
};

export default App;