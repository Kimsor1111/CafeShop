import RootLayout from "./layout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Menu } from "./pages";
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
        path: "menu",
        element: <Menu/>,
      },
      {
        path: "food",
        element: <h1>Food</h1>,
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
