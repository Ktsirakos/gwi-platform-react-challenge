import CatCard from "@/components/CatCard"
import { fetchRandomCats } from "@/lib/cat-api"
import { Cat } from "@/types/cat-api-types"
import { useEffect, useState } from "react"

export default function Cats() {
    const [cats, setCats] = useState<Cat[]>([])
    useEffect(() => {
        fetchRandomCats({}).then((value) => setCats(value))
    }, [])

    return (
        <div className="flex-1">
            <div className="grid grid-cols-5 gap-2 ">
                {
                    cats.map((cat) => <CatCard key={cat.id} cat={cat} />)
                }
            </div>
        </div>
    )
}