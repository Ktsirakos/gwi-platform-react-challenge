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
    CATS_WITH_ID: '/cats/:id',
    BREEDS: '/breeds',
    BREEDS_WITH_ID: '/breeds/:id',
    FAVOURITES: '/favourites',
    CAT_DETAILS: (catId: RouteParams['catId']) => `/cats/${catId}`,
    BREED_DETAILS: (breedId: RouteParams['breedId']) => `/breeds/${breedId}`,
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
                path: ROUTES.CATS_WITH_ID,
                element: <Cats />,
            },
            {
                path: ROUTES.BREEDS,
                element: <Breeds />,
            },
            {
                path: ROUTES.BREEDS_WITH_ID,
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