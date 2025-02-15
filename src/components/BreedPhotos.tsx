import { ROUTES } from "@/config/routes";
import { fetchRandomCats } from "@/lib/cat-api"
import { Cat } from "@/types/cat-api-types"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Loading from "./Loading";
import LazyImage from "./LazyImage";

export default function BreedPhotos({ name }: { name?: string }) {

    const navigate = useNavigate();
    const [cats, setCats] = useState<Cat[]>([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        if (!name) return;
        setLoading(true)
        fetchRandomCats({ filteredBreeds: [name] }).then((value) => setCats(value)).finally(() => setLoading(false))
    }, [])

    if (loading) return <Loading condition={true} />

    return (
        <>
            <p className="text-black text-2xl mb-5">Cats with that breed</p>
            <div className="grid grid-cols-3">
                {
                    cats.map(e =>
                        <button className="h-50" onClick={() => navigate(ROUTES.CAT_DETAILS(e.id))}>
                            <LazyImage onFinishLoading={() => setLoading(false)} url={e.url} />
                        </button>)
                }
            </div>
        </>
    )
}