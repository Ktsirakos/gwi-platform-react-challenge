import { ReactNode } from "react";

export default function HeaderEntry({
    icon, route, name
}: {
    icon: ReactNode,
    route: string,
    name: string,
}) {

    return (
        <div className="flex gap-2 items-center text-gray-400 hover:text-purple-500">
            {icon}
            <a className="text-2xl font-bold" href={route}>{name}</a>
        </div>
    )
}