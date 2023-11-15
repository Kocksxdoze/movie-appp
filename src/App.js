import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Profile from "./pages/profile"
import Contact from "./pages/contact"
import Header from "./components/header";
import NotFound from "./pages/error.jsx";
import OneMovie from "./pages/oneMovie";
import Footer from "./components/footer.js";
import CopyRight from "./pages/copyright.jsx";
import "./index.css"




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
        <Route path="copyright" element={<CopyRight />} />
        <Route path="/movie/:id" element={<OneMovie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;