import Card from "@/components/Card"
import { ROUTES } from "@/config/routes"
import useStore from "@/store/store"
import { useNavigate } from "react-router"

export default function Favourites() {
    const store = useStore()
    const navigate = useNavigate()

    return (
        <div className="grid grid-cols-3 gap-2 m-5">
            {store.favourite.map(e => <Card url={e.url} onClick={() => {
                navigate(ROUTES.CAT_DETAILS(e.id))
            }} />)}
        </div>

    )
}