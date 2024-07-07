import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import CryptoJS from "crypto-js"

export const _useAuth = () => {
 const [ auth ,setAuth ] = useAuth()
  
  const navigate = useNavigate();
  const handleSignup = (newUser) => {  
    const users = JSON.parse(Cookies.get('users') || '[]');
     if(users.find(user => user.email === newUser.email)){
       toast.error("User is Already Exist")
     }else{
      users.push(newUser);
      Cookies.set('users', JSON.stringify(users));
      toast.success('Successfully Created!');
      console.log(users);
      navigate('/login');
     }
  }
  
  const handleLogin = (values) => {
    const users = JSON.parse(Cookies.get('users')) || [];
    
    const { email, password } = values;
    
    const foundUser = users.find(user => user.email === email && user.password === password);
    
    if (foundUser) {
      setAuth(foundUser);
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(foundUser),
        import.meta.env.VITE_KEY
      ).toString();
       Cookies.set("authTicket", encryptedData, { expires: 2 });
      
      toast.success('Login successful!');
      navigate('/dashboard');
    } else {
      toast.error('Invalid email or password');
    }
  };
  const handleLogout = () => {
    setAuth({
        email: "",
        fullName: "",
        token:"",
    });
    toast.error("User logged out!");
    navigate("/login");
  };
  return { 
    handleSignup,
    handleLogout,
    handleLogin
  }
}