import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import WatchPage from "./components/WatchPage";
import { Provider } from "react-redux";
import appStore from "./store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
