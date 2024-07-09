import App from "../App";
import Cutting from "../components/pages/cutting";
import NewProduct from "../components/pages/newProduct";

const routes = [
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/newProduct",
        element: <NewProduct />, 
    },
    {
        path: "/Cutting",
        element: <Cutting />, 
    },
  ]
  export { routes };

