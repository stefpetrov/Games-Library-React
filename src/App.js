

import { Route, Routes } from "react-router-dom";

import Catalog from "./components/Catalog/Catalog";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import GameDetails from "./components/GameDetails";
import Header from "./components/Header";
import HomePage from "./components/Home/HomePage";
import Login from "./components/Authentication/Login";
import Logout from "./components/Authentication/Logout";
import Register from "./components/Authentication/Register";
import { AuthProvider } from "./contexts/AuthContext";














function App() {
  return (
    <AuthProvider>
      <div id="box">
        <Header />


        <main id="site-content">

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={< Logout/>} />
            <Route path="/create" element={<CreateGame />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/details/:gameId" element={<GameDetails />} />
            <Route path="/edit/:gameId" element={<EditGame />} />


          
          </Routes>

        </main>

      </div>
    </AuthProvider>
  );
}

export default App;
