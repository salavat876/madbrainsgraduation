import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import News from "./pages/News";
import PrivateRoute from "./hoc/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import Volunteer from "./pages/volunteerPage";
import AdminPage from "./pages/AdminPage";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const { isAdmin } = useSelector(({ app }) => app);
  return (
    <>
      <Header />
      <main style={{ marginTop: "1em" }}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/volunteer" element={<Volunteer />} />
          <Route exact path="/admin-login" element={<LoginPage />} />
          <Route
            exact
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
