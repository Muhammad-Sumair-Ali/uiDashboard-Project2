import { createContext, useContext, useEffect, useState } from "react";
import Cookie from "js-cookie";
import CryptoJS from "crypto-js";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    email: "",
    fullName: "",
    token: "",
  });

  useEffect(() => {
    let mySec =
      Cookie.get("authTicket") || sessionStorage.getItem("authTicket");
    if (mySec) {
      try {
        const decSec = CryptoJS.AES.decrypt(mySec, import.meta.env.VITE_KEY);
        const decryptedData = JSON.parse(decSec.toString(CryptoJS.enc.Utf8));
        setAuth(decryptedData);
      } catch (error) {
        console.error("Error decrypting authentication ticket:", error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
