import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Account from "./pages/Account";
import UpdateProfile from "./pages/UpdateProfile";

function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/account" element={<Account/>}/>
        <Route path="/updateProfile" element={<UpdateProfile/>}/>
      </Routes>
      <Toaster/>
    </Router>
  );
}

export default App;
