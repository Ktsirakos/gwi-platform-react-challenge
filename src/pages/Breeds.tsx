import BreedAttributes from "@/components/BreedAttributes"
import BreedPhotos from "@/components/BreedPhotos"
import Card from "@/components/Card"
import Modal from "@/components/Modal"
import { ROUTES } from "@/config/routes"
import { fetchBreeds } from "@/lib/cat-api"
import { Breed } from "@/types/cat-api-types"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

export default function Breeds() {
    const [breeds, setBreeds] = useState<Breed[]>([])
    const [showBreedDetails, setShowBreedDetails] = useState(false)
    const { id: breedId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchBreeds().then((value) => setBreeds(value))
    }, [])

    useEffect(() => {
        if (breedId) setShowBreedDetails(true)
        else setShowBreedDetails(false)
    }, [breedId])

    return (
        <>
            <div className="flex-1">
                <div className="grid grid-cols-5 gap-2 mb-5">
                    {
                        breeds.map((breed) => <Card key={breed.id} referenceImage={breed.reference_image_id} title={breed.name} onClick={() => navigate(ROUTES.BREED_DETAILS(breed.id))} />)
                    }
                </div>
            </div>
            <Modal isOpen={showBreedDetails} title="Breed Details" onClose={() => {
                navigate(ROUTES.BREEDS)
            }}>
                <BreedAttributes breedId={breedId} />
                <BreedPhotos name={breedId} />
            </Modal>
        </>
    )
}