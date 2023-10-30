import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Profile from "./pages/profile"
import Tranding from "./pages/tranding"
import Header from "./components/header";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="tranding" element={<Tranding />} />
      </Routes>
    </div>
  )
}

export default App;