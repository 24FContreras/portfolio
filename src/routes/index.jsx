import { createBrowserRouter } from "react-router-dom";

//LAYOUTS
import Root from "../layouts/Root.layout";

//VIEWS
import Home from "../views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: teamLoader,
      },
      // {
      //   path: "team",
      //   element: <Team />,
      //   // loader: teamLoader,
      // },
    ],
  },
]);

export default router;
