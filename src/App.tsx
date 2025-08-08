import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

function App() {
  const user = localStorage.getItem("user");
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/reports" element={user ? <Reports /> : <Navigate to="/login" />} />
        <Route path="/settings" element={user ? <Settings /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
