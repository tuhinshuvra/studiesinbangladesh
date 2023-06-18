const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../layout/MainLayout");
const { default: Home } = require("../views/pages/Home/Home");
const { default: WrongRoute } = require("../views/components/Shared/ErrorDisplay/WrongRoute");


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/",
                element: <Home></Home>
            },


            {
                path: "*",
                element: <WrongRoute> </WrongRoute>
            },
        ]
    }
])

export default router;