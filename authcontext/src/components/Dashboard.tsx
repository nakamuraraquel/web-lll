import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <h2>Bem-vindo, {user}!</h2>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};
