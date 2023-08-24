import { createBrowserRouter } from "react-router-dom";

//LAYOUTS
import Root from "../layouts/Root.layout";

//VIEWS
import Home from "../views/Home";
import ResumeES from "../views/ResumeES";
import ResumeEN from "../views/ResumeEN";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      ,
    ],
  },
  {
    path: "/resume",
    children: [
      {
        path: "es",
        element: <ResumeES />,
      },
      {
        path: "en",
        element: <ResumeEN />,
      },
    ],
  },
]);

export default router;
