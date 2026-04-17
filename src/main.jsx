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
import CardDetails from "./Components/Friends/CardDetails/CardDetails.jsx";
import HistoryProvider from "./Context/HistoryProvider.jsx";

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
      {
        path: "carts/:id",
        loader: async () => await fetch(`/Data/Friends.json`),
        Component: CardDetails,
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
    <HistoryProvider>
      <RouterProvider router={router}></RouterProvider>
    </HistoryProvider>
  </StrictMode>,
);
