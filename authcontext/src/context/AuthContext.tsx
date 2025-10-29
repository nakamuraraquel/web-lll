import { createContext, useState, useContext, useEffect, type ReactNode } from "react";

interface AuthContextType {
  user: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);


  useEffect(() => {
  const savedUser = localStorage.getItem("user");
  if (savedUser) {
    setUser(savedUser);
    console.log("🔄 Usuário restaurado do localStorage:", savedUser);
  } else {
    console.log("🟡 Nenhum usuário salvo no localStorage.");
  }
}, []);

const login = (email: string, password: string) => {
  if (email && password) {
    setUser(email);
    localStorage.setItem("user", email);
    console.log("✅ Usuário logado:", email);
  }
};

const logout = () => {
  console.log("🚪 Logout realizado, removendo usuário do localStorage.");
  setUser(null);
  localStorage.removeItem("user");
};


  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return context;
};
