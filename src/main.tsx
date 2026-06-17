import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router";
import PokemonCard from "./components/PokemonCard.tsx";


// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/:pokemonName",
        element: <PokemonCard pokemon={pokemon} />,
      },
      {
        path: "/about",
        element: <></>,
      },
    ],
  },
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement == null) {
  throw new Error(`Your HTML Document must contain a <div id="root"></div>`);
}

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
