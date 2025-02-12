import { Outlet } from "react-router"
import Header from "./components/Header"

export default function Layout() {
    return (
        <div className="flex flex-col h-full">
            <div className="flex-1">
                <Header />
            </div>
            <div className="flex-5">
                <Outlet />
            </div>
        </div>
    )
}