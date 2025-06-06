import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/cjs/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from "./components/screens/home";
import About from "./components/screens/about";

import Local from "./components/screens/local/Local";
import Passagem from "./components/screens/passagem/Passagem";
import Tipo from "./components/screens/tipo/Tipo";
import Veiculo from "./components/screens/veiculo/Veiculo";

import Login from './components/screens/login/Login';
import MenuPublico from "./components/MenuPublico";
import MenuPrivado from "./components/MenuPrivado";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPublico />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sobre",
        element: <About />,
      },
      {
        path : "login",
        element :  <Login/>
      }
    ]
  },
  {
    path: "/privado",
    element: <MenuPrivado />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path : "About",
        element : <About/>
      },  
      {
        path: "local",
        element: <Local />,
      },
      {
        path: "passagem",
        element: <Passagem />,
      },
      {
        path: "tipo",
        element: <Tipo />,
      },
      {
        path: "veiculo",
        element: <Veiculo />,
      }
    ]
  }
])

function App() { 
  return (
    <RouterProvider router={router} />
  )
}

export default App; 