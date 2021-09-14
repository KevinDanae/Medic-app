import { Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Aqui va el navbar global para que se vea en todas las rutas */}
      <Route exact path="/">
        {/* Aqui va la pagina princpipal de landing page */}
      </Route>
      <Route exact path="/home">
        {/*  Aqui va el home dependiendo del tipo de usario */}
      </Route>
      <Route exact path="/login">
        {/* Aqui va la pantalla de login */}
      </Route>
    </>
  );
}
export default App;
