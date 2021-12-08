import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import News from "./pages/News"
import Volunteer from "./pages/volunteerPage"
function App() {
  return (
    <>
      <Header />
      <main style={{ marginTop: "1em" }}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/volunteer" element={<Volunteer />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
