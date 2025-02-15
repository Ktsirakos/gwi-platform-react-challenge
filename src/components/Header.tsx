import { Cat, Heart, PawPrint } from "lucide-react"
import HeaderEntry from "@/components/HeaderEntry"
import { ROUTES } from "@/config/routes"
import { useLocation } from "react-router"

export default function Header() {

    const location = useLocation()

    const links = [{
        icon: <Cat />,
        name: "Cats",
        selected: false,
        route: ROUTES.CATS
    },
    {
        icon: <PawPrint />,
        name: "Breeds",
        selected: false,
        route: ROUTES.BREEDS
    },
    {
        icon: <Heart />,
        name: "Favourites",
        selected: false,
        route: ROUTES.FAVOURITES
    }]

    return (
        <div className="flex flex-row items-center justify-between w-full">
            <img src="https://www.globalwebindex.com/hubfs/gwi-logo.svg" width={100} height={100} />
            <div className="flex gap-10">
                {links.map((l => (
                    <HeaderEntry key={l.route} currentPath={location.pathname} icon={l.icon} name={l.name} route={l.route} />
                )))}
            </div>
            <p className="text-gray-400">Konstantinos Tsirakos</p>
        </div>
    )
}