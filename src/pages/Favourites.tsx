import Card from "@/components/Card"
import { ROUTES } from "@/config/routes"
import useStore from "@/store/store"
import { useNavigate } from "react-router"

export default function Favourites() {
    const store = useStore()
    const navigate = useNavigate()

    return (
        <div className="grid grid-cols-3 gap-2 m-5">
            {store.favourite.map(e =>
                <Card
                    key={e.id}
                    url={e.url}
                    isFavourite={store.isFavourite(String(e.id))}
                    onHeartPressed={() => {
                        store.removeFromFavourite(String(e.id))
                    }}
                    onClick={() => {
                        navigate(ROUTES.CAT_DETAILS(String(e.id)))
                    }} />
            )}
        </div>

    )
}