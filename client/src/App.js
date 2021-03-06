import LandingPage from "./components/LandingPage";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      {/* Aqui va el navbar global para que se vea en todas las rutas */}
      <Route exact path="/">
        {/* Aqui va la pagina princpipal de landing page */}
        <LandingPage />
      </Route>
      <Route exact path="/home">
        {/*  Aqui va el home dependiendo del tipo de usario */}
      </Route>
      <Route exact path="/login">
        {/* Aqui va la pantalla de login */}
      </Route>
      <Footer />
    </>
  );
}
export default App;
