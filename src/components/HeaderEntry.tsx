import { ReactNode } from "react";
import { Link } from "react-router";

export default function HeaderEntry({
    icon, route, name, currentPath
}: {
    icon: ReactNode,
    route: string,
    name: string,
    currentPath: string
}) {


    return (
        <div className={`
        flex gap-2 
        items-center 
        ${currentPath === route ? 'text-purple-500' : 'text-gray-400'}
        hover:text-purple-500`}>
            {icon}
            <Link className="text-2xl font-bold" to={route}>{name}</Link>
        </div>
    )
}