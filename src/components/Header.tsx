import { Cat, Heart, PawPrint } from "lucide-react"
import HeaderEntry from "./HeaderEntry"

export default function Header() {

    const links = [{
        icon: <Cat />,
        name: "Cats",
        route: "/cats"
    },
    {
        icon: <PawPrint />,
        name: "Breeds",
        route: "/breeds"
    },
    {
        icon: <Heart />,
        name: "Favourites",
        route: "/favourites"
    }]

    return (
        <div className="flex flex-row items-center justify-between w-full">
            <img src="https://www.globalwebindex.com/hubfs/gwi-logo.svg" width={100} height={100} />
            <div className="flex gap-10">
                {links.map((l => (
                    <HeaderEntry icon={l.icon} name={l.name} route={l.route} />
                )))}
            </div>
            <p className="text-gray-400">Konstantinos Tsirakos</p>
        </div>
    )
}