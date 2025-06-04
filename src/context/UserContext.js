import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("session");
    if (!stored) return null;

    try {
      const session = JSON.parse(stored);
      const now = new Date().getTime();
      if (now < session.expiresAt) {
        return session.user;
      } else {
        localStorage.removeItem("session");
        return null;
      }
    } catch {
      return null;
    }
  });

  const login = (userData) => {
    const expiration = new Date().getTime() + 30 * 60 * 1000;
    const session = {
      user: userData,
      expiresAt: expiration,
    };
    localStorage.setItem("session", JSON.stringify(session));
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("session");
  };

  useEffect(() => {
    if (!user) return;

    const session = JSON.parse(localStorage.getItem("session"));
    const timeLeft = session.expiresAt - new Date().getTime();

    const timeout = setTimeout(() => {
      logout();
    }, timeLeft);

    return () => clearTimeout(timeout);
  }, [user]);

  const isLoggedIn = !!user;

  return (
    <UserContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
