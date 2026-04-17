import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import Root from "./Pages/Layout/Root.jsx";
import { RouterProvider } from "react-router/dom";
import Home from "./Pages/Home/Home.jsx";
import Timeline from "./Pages/Timeline/Timeline.jsx";
import Stats from "./Pages/Stats/Stats.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, path: "/", Component: Home },
      { path: "timeline", Component: Timeline },
      {
        path: "stats",
        Component: Stats,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
