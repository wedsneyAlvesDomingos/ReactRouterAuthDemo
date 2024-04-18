import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import  HomePage from "./pages/Home";


import "./App.css";

import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./components/protectedRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;