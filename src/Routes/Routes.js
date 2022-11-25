import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import CategoryDetails from "../Pages/Home/PhoneCategories/CategoryDetails";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                element: <AboutUs></AboutUs>
            },
            {
                path: '/products/:category',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/products/${params.category}`)
                },
                element: <CategoryDetails></CategoryDetails>
            },
        ]
    }
])