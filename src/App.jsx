import RootLayout from "./layout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <h1>Home</h1>,
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
