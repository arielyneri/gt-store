import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/shared/Footer"
import Home from "./pages/Home"


function App() {

  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="produtos" element={<p>Produtos</p>}/>
        <Route path="produtos" element={<p>Login</p>}/>
        <Route path="produtos" element={<p>Carrinho</p>}/>
      </Routes>
    </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
