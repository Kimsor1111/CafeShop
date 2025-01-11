import RootLayout from "./layout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, MenuProduct, Detail, Category } from "./pages";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <MenuProduct />,
      },
      {
        path: "menu/detail/:nameurl",
        element: <Detail />,
        errorElement: "Product Not Found",
      },
      {
        path: "menu/category/:category",
        element: <Category />,
        errorElement: "Categorys Not Found",
      },
      {
        path: "about",
        element: <h1>about</h1>,
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
