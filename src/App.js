import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Profile from "./pages/profile"
import Tranding from "./pages/tranding"
import Header from "./components/header";
import NotFound from "./pages/error.jsx";
import OneMovie from "./pages/oneMovie";
import Footer from "./components/footer.js";
import "./index.css"




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="tranding" element={<Tranding />} />

        <Route path="/movie/:id" element={<OneMovie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;