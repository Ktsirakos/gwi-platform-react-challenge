import AsyncButton from "@/components/AsyncButton"
import CatCard from "@/components/CatCard"
import Modal from "@/components/Modal"
import { ROUTES } from "@/config/routes"
import { fetchRandomCats } from "@/lib/cat-api"
import { Cat } from "@/types/cat-api-types"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

export default function Cats() {
    const [cats, setCats] = useState<Cat[]>([])
    const [fetchingMoreCats, setFetchingMoreCats] = useState(false)
    const [showCatDetails, setShowCatDetails] = useState(false)
    const navigate = useNavigate()
    const { id: catId } = useParams()

    useEffect(() => {
        fetchRandomCats({}).then((value) => setCats(value))
    }, [])


    useEffect(() => {
        if (catId) setShowCatDetails(true)
        else setShowCatDetails(false)
    }, [catId])

    const fetchMoreCats = () => {
        setFetchingMoreCats(true)
        fetchRandomCats({}).then((value) => {
            setCats([...cats, ...value])
            setFetchingMoreCats(false)
        })
    }

    return (
        <>
            <div className="flex-1">
                <div className="grid grid-cols-5 gap-2 mb-5">
                    {
                        cats.map((cat) => <Card key={cat.id} url={cat.url} onClick={() => {
                            navigate(ROUTES.CAT_DETAILS(cat.id))
                        }} />)
                    }
                </div>
                <div className="flex mb-10 w-full justify-center">
                    <AsyncButton onClick={fetchMoreCats} loading={fetchingMoreCats} />
                </div>

            </div>
            <Modal isOpen={showCatDetails} title="Cat Details" onClose={() => {
                navigate(ROUTES.CATS)
            }}>
                <p className="text-black">Cat Details content</p>
            </Modal>
        </>
    )
}