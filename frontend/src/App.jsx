import{ BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Send from "./components/Send"
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/send" element={<Send/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
