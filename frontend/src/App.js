import { Routes, Route, Navigate } from "react-router-dom";
import Admin from "./Pages/Admin";
import Booking from "./Pages/Booking";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Sejour from "./Pages/Sejour";
import Services from "./Pages/Services";
import Subscription from "./Pages/Subscription";
import SuccessRegistration from "./Pages/SuccessRegistration";

function App() {
  const role = localStorage.getItem("Role");
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/register' exact element={<Register />} />
      <Route path='/services' exact element={<Services />} />
      <Route path='/sejour' exact element={<Sejour />} />
      <Route path='/booking' exact element={<Booking />} />
      <Route path='/subscription' exact element={<Subscription />} />
      <Route path='/success' exact element={<SuccessRegistration />} />
      <Route path='/home' exact element={<Home />} />
      {role === "Admin" && <Route path='/admin' exact element={<Admin />} />}
    </Routes>
  );
}

export default App;
