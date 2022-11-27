import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import MySellers from "../Pages/Dashboard/Admin/MySellers";
import MyOrder from "../Pages/Dashboard/MyOrder";
import Payment from "../Pages/Dashboard/Payment";
import AddAProducts from "../Pages/Dashboard/Seller/AddAProducts";
import MyBuyers from "../Pages/Dashboard/Seller/MyBuyers";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts";
import Home from "../Pages/Home/Home";
import CategoryDetails from "../Pages/Home/PhoneCategories/CategoryDetails";
import Login from "../userSignInOut/Login";
import Register from "../userSignInOut/Register";
import PrivateAdmin from "./PrivateAdmin";
import PrivateRoutes from "./PrivateRoutes";
import PrivateSeller from "./PrivateSeller";




export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/aboutUs',
                element: <PrivateRoutes><AboutUs></AboutUs></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/products/:category',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/products/${params.category}`)
                },
                element: <CategoryDetails></CategoryDetails>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrder></MyOrder>
            },
            {
                path: 'dashboard/payment/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/bookings/${params.id}`)
                },
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/addAProducts',
                element: <PrivateSeller><AddAProducts></AddAProducts></PrivateSeller>
            },
            {
                path: '/dashboard/myProducts',
                element: <PrivateSeller><MyProducts></MyProducts></PrivateSeller>
            },
            {
                path: '/dashboard/myBuyers',
                element: <PrivateSeller><MyBuyers></MyBuyers></PrivateSeller>
            },
            {
                path: '/dashboard/mySellers',
                element: <PrivateAdmin><MySellers></MySellers></PrivateAdmin>
            },
        ]
    }
])