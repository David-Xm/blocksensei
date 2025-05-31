import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Dashboard from "./pages/dashboard";
import Learn from "./pages/learn";
import SignUp from "./pages/SignUp";
import Quest from "./pages/Quest";

function App() {
  return (
    <div className='mx-auto container'>
      {/* <Navbar /> */}
      <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/signup' element={<SignUp />} /> {/* ✅ top-level */}
  <Route path='/dashboard' element={<Dashboard />}/>
  <Route path='/learn' element={<Learn />} />
  <Route path='/quest' element={<Quest />} />
</Routes>

    </div>
  );
}

export default App;
