import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import User from "./components/User";
import User1 from "./components/User1";
import ProductState from "./context/ProductState";

import CartItems from "./components/cartItems";
import AddProduct from "./components/AddProduct";

function App() {
  
  /* // eslint-disable-next-line no-unused-vars */
  const [mode, setMode] = useState("dark");
  /* // eslint-disable-next-line no-unused-vars */
  const [btnText, setBtnText] = useState("Enable Dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({ type: type, message: message });
  };

  setTimeout(() => {
    setAlert(null);
  }, 5000);

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      setBtnText("Enable Light");
      showAlert("success", "Dark Mode Enabled");
      toast.success("Dark Mode Enabled", { autoClose: 2000 });
    } else {
      setMode("light");
      setBtnText("Enable Dark");
      showAlert("info", "Light Mode Enabled");
      toast.info("Light Mode Enabled", { autoClose: 2000 });
    }
  };

  return (
    <>
      <ProductState>
        <Router>
          <Navbar mode={mode} btnText={btnText} toggleMode={toggleMode} />
          <Alert alert={alert} showAlert={showAlert} />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user/:userId/:userName" element={<User1 />} />
            <Route path="/user" element={<User />} />
            <Route path="/cartItems" element={<CartItems />} />
            <Route path="/addProduct" element={<AddProduct />} />
          </Routes>
          
          <ToastContainer />

          <Footer />
        </Router>
      </ProductState>
    </>
  );
}

export default App;
