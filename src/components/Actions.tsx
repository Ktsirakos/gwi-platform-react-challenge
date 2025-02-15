import { ROUTES } from "@/config/routes"
import { Heart } from "lucide-react"
import { Link } from "react-router"

export default function Actions({ breedId, wikipediaLink, catIsFavourite, onAddToFavourites }: { breedId?: string, onAddToFavourites: () => void, wikipediaLink?: string, catIsFavourite: boolean }) {
    const favouriteElementText =
        catIsFavourite
            ? <><Heart color="red" fill="red" /><p className="text-red-500">Remove from favourites</p></>
            : <><Heart color="black" /><p className="text-black">Add to favourites</p></>

    return (
        <div className="flex flex-row w-full justify-between">
            {wikipediaLink && <a target="_blank" rel="noopener noreferrer" className="text-blue-500 underline" href={wikipediaLink}>Wikipedia</a>}
            <button className="flex flex-row gap-2" onClick={onAddToFavourites}>
                {favouriteElementText}
            </button>
            {breedId && <Link className="text-blue-500 flex flex-row underline align-center gap-2" to={ROUTES.BREED_DETAILS(breedId)}>Show more cats</Link>}
        </div >
    )
}
