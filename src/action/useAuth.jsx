import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const useAuth = () => {
  const navigate = useNavigate();
  const { loginUser } = useUser()
  const handleSignup = (newUser) => {  
    const users = JSON.parse(Cookies.get('users') || '[]');
     if(users.find(user => user.email === newUser.email)){
       // alert( 'user already exists')
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
      toast.success('Login successful!');
      loginUser(foundUser); // Set user data using context
      navigate('/dashboard');
    } else {
      toast.error('Invalid email or password');
    }
  };
  
  return { 
    handleSignup,
    handleLogin
  }
}