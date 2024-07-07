import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import AuthProvider from "../context/authContext";
import { Login, SignUp, Dashboard, DashboardTwo, Home } from "./pages";

export default function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Home />
          <Routes>
            <Route path="*" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route element={<AuthRoutes />}>
              <Route path="/dashboard" element={<DashboardTwo />} />
              <Route path="/orders" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
