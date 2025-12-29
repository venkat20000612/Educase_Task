import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="w-[375px] mx-auto min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<CreateAccount/>} />
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
      <ToastContainer position="top-center" />
    </BrowserRouter>

    
  );
}

export default App;
