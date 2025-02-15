import { Heart } from "lucide-react"

export default function Actions({ wikipediaLink, catIsFavourite, onAdToFavourites }: { onAdToFavourites: () => void, wikipediaLink?: string, catIsFavourite: boolean }) {
    const favouriteElementText =
        catIsFavourite
            ? <><Heart color="red" fill="red" /><p className="text-red-500">Remove from favourites</p></>
            : <><Heart color="black" /><p className="text-black">Add to favourites</p></>

    return (
        <div className="flex flex-row w-full justify-between">
            {wikipediaLink && <a target="_blank" rel="noopener noreferrer" className="text-blue-500 underline" href={wikipediaLink}>Wikipedia</a>}
            <button className="flex flex-row gap-2" onClick={onAdToFavourites}>
                {favouriteElementText}
            </button>
        </div>
    )
}
