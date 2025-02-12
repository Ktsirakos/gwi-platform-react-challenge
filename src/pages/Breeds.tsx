import BreedCard from "@/components/BreedCard"
import { fetchBreeds } from "@/lib/cat-api"
import { Breed } from "@/types/cat-api-types"
import { useEffect, useState } from "react"

export default function Breeds() {
    const [breeds, setBreeds] = useState<Breed[]>([])

    useEffect(() => {
        fetchBreeds().then((value) => setBreeds(value))
    }, [])

    return (
        <div className="flex-1">
            <div className="grid grid-cols-5 gap-2 mb-5">
                {
                    breeds.map((breed) => <BreedCard key={breed.id} breed={breed} />)
                }
            </div>
        </div>)
}