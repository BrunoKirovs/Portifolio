import { Header } from "./components/Header.js"
import { Footer } from "./components/Footer.js"
import { Home } from "./pages/Home.js" 
import { Route, Routes } from "react-router-dom"
import { About } from "./pages/About.js"
import { Projects } from "./pages/Projects.js"

function App() {
   return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow p-4">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/abount" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
