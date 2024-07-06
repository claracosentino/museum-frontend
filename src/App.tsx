import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import DepartmentObjList from "./pages/DepartmentObjList";
import ObjDetail from "./pages/ObjDetail";
import About from "./pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/department-obj/:id",
        element: <DepartmentObjList />,
    },
    {
        path: "/obj-detail/:id",
        element: <ObjDetail />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
