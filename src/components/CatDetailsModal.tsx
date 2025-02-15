import { Cat } from "@/types/cat-api-types";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import { fetchCatById } from "@/lib/cat-api";
import Actions from "@/components/Actions";
import useStore from "@/store/store";
import BreedAttributes from "@/components/BreedAttributes";

export default function CatDetailsModal({
    catId,
    onClose,
    isOpen
}: {
    catId?: string,
    onClose: () => void,
    isOpen: boolean
}) {

    const [cat, setCat] = useState<Cat | undefined>(undefined)
    const store = useStore()

    useEffect(() => {
        if (!catId) {
            setCat(undefined)
            return;
        }

        fetchCatById({ catId }).then((value) => {
            setCat(value)
        })
    }, [catId])

    const handleFavouriteClick = () => {
        if (!cat?.id) return;

        if (store.isFavourite(cat.id)) {
            store.removeFromFavourite(cat.id)
        } else {
            store.addToFavourite(cat)
        }
    }

    return (
        <Modal isOpen={isOpen} title={'Cat Details'} onClose={onClose}>
            <img className="w-full h-120 object-contain object-center" src={cat?.url} />
            <div className="p-5">
                <BreedAttributes breed={cat?.breeds?.[0]} />
                <Actions
                    breedId={cat?.breeds?.[0].id}
                    wikipediaLink={cat?.breeds?.[0].wikipedia_url}
                    catIsFavourite={store.isFavourite(cat?.id)}
                    onAddToFavourites={handleFavouriteClick}
                />
            </div>
        </Modal>
    )
}