import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/Signin"
import SingUp from "./pages/SingUp"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Header from "./components/Header"
import PriveteRoute from "./components/PriveteRoute"
import CreateListing from "./pages/CreateListing"

export default function App() {
  return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />        
          <Route path="/sign-in" element={<SignIn />} />  
          <Route path="/sign-up" element={<SingUp />} />  
          <Route path="/about" element={<About />} />  
          <Route element={<PriveteRoute />} >
            <Route path="/profile" element={<Profile />} /> 
            <Route path="/create-listing" element={<CreateListing />} /> 

          </Route> 
        </Routes>
      </BrowserRouter>
  )
}


// (
 // <div className='text-red-500'>App</div>
//)