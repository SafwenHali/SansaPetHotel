import { Routes, Route } from "react-router-dom";
import Booking from "./Pages/Booking";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Sejour from "./Pages/Sejour";
import Services from "./Pages/Services";
import Subscription from "./Pages/Subscription";
import SuccessRegistration from "./Pages/SuccessRegistration";

function App() {
  return (
    <Routes>
      <Route path='/login' exact element={<Login />} />
      <Route path='/register' exact element={<Register />} />
      <Route path='/home' exact element={<Home />} />
      <Route path='/services' exact element={<Services />} />
      <Route path='/sejour' exact element={<Sejour />} />
      <Route path='/booking' exact element={<Booking />} />
      <Route path='/subscription' exact element={<Subscription />} />
      <Route path='/success' exact element={<SuccessRegistration />} />
    </Routes>
  );
}

export default App;
