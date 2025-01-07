import RootLayout from "./layout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "drink",
        element: <h1>Drink</h1>,
      },
      {
        path: "about",
        element: <h1>About</h1>,
      },
      {
        path: "Contact",
        element: <h1>Contact</h1>,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  );
}
export default App;
