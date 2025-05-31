import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Dashboard from "./pages/dashboard";
import Learn from "./pages/learn";

function App() {
  return (
    <div className='mx-auto container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='learn' element={<Learn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
