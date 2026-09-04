import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Login from "./pages/Login"
import Footer from "./components/Footer"
import Register from "./pages/Register"

const App = () => {
  return (
    <>
    <BrowserRouter>
       <Header />
       <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about-us" element={<div>About Us Page</div>} />
          <Route path="/blogs" element={<div>Blogs Page</div>} />
          <Route path="/contact-us" element={<div>Contact Us Page</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
       </Routes>
    <Footer />
     </BrowserRouter>
    </>
  )
}

export default App