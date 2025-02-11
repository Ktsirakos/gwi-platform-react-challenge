import Layout from "@/layout";
import Breeds from "@/pages/Breeds";
import Cats from "@/pages/Cats";
import Favourites from "@/pages/Favourites";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

interface RouteParams {
    catId: string;
    breedId: string;
}

export const ROUTES = {
    HOME: '/',
    CATS: '/cats',
    CAT_DETAILS: (catId: RouteParams['catId']) => `/cats/${catId}`,
    BREEDS: '/breeds',
    BREED_DETAILS: (breedId: RouteParams['breedId']) => `/breeds/${breedId}`,
    FAVOURITES: '/favourites',
} as const

const routes = [
    {
        element: <Layout />,
        children: [
            {
                path: ROUTES.HOME,
                element: <Home />,
            },
            {
                path: ROUTES.CATS,
                element: <Cats />,
            },
            {
                path: ROUTES.BREEDS,
                element: <Breeds />,
            },
            {
                path: ROUTES.FAVOURITES,
                element: <Favourites />
            }
        ],
    },
]

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter(routes)