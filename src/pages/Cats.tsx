import AsyncButton from "@/components/AsyncButton"
import CatCard from "@/components/CatCard"
import { fetchRandomCats } from "@/lib/cat-api"
import { Cat } from "@/types/cat-api-types"
import { useEffect, useState } from "react"

export default function Cats() {
    const [cats, setCats] = useState<Cat[]>([])
    const [fetchingMoreCats, setFetchingMoreCats] = useState(false)

    useEffect(() => {
        fetchRandomCats({}).then((value) => setCats(value))
    }, [])


    const fetchMoreCats = () => {
        setFetchingMoreCats(true)
        fetchRandomCats({}).then((value) => {
            setCats([...cats, ...value])
            setFetchingMoreCats(false)
        })
    }

    return (
        <div className="flex-1">
            <div className="grid grid-cols-5 gap-2 mb-5">
                {
                    cats.map((cat) => <CatCard key={cat.id} cat={cat} />)
                }
            </div>
            <div className="flex mb-10 w-full justify-center">
                <AsyncButton onClick={fetchMoreCats} loading={fetchingMoreCats} />
            </div>
        </div>
    )
}