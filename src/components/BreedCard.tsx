import { fetchCatById } from "@/lib/cat-api"
import { Breed } from "@/types/cat-api-types"
import { useEffect, useState } from "react"
import Loading from "./Loading"

export default function BreedCard({
    breed
}: {
    breed: Breed
}) {

    const [loadingBreedReferenceImage, setLoadingBreedReferenceImage] = useState(false)
    const [breedReferenceImage, setBreedReferenceImage] = useState<string | undefined>(undefined)

    useEffect(() => {
        if (!breed.reference_image_id) return
        setLoadingBreedReferenceImage(true)
        fetchCatById({ catId: breed.reference_image_id }).then((value) => setBreedReferenceImage(value.url))
    }, [])

    return (
        <div className="group transition-all duration-300 relative flex flex-col cursor-pointer hover:text-purple-500 text-black border-1 border-gray-700 rounded-3xl overflow-hidden h-90 items-center">
            <Loading condition={loadingBreedReferenceImage} />
            <div className="flex-2 content-center ">
                <p className="text-black text-xl group-hover:text-purple-500 group-hover:font-bold">{breed.name}</p>
            </div>
            <div className="flex-10 content-center">
                {
                    breed.reference_image_id
                        ? <img className="object-cover w-full h-full" src={breedReferenceImage} onLoad={() => setLoadingBreedReferenceImage(false)} />
                        : <p className="font-bold text-2xl text-gray-400 p-5">No Reference Image</p>
                }
            </div>
        </div>
    )
}