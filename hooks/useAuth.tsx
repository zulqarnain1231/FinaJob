import { createContext, useContext, useEffect, useState } from "react";
import { AuthProviderProps, IAuthContext } from "../types/useAuth.types";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  logout: () => {},
  user: null,
  setUser: () => {},
});

/**
 * Auth provider
 */
const AuthProvider = ({ children }: AuthProviderProps) => {
  const Router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>("Admin");

  useEffect(() => {
    const jwToken = cookies["jwToken"];
    if (jwToken) {
      setIsAuthenticated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = () => {
    removeCookie("jwToken");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        logout,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Auth hook
 * @returns {React.ContextType<typeof AuthContext>} - Auth context
 */
const useAuth = (): React.ContextType<typeof AuthContext> => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
