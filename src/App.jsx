import RootLayout from "./layout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, MenuProduct, Detail } from "./pages";
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
        path: "menu/:id",
        element: <Detail />,
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
