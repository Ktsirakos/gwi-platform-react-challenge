import { Cat } from "@/types/cat-api-types";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { fetchCatById } from "@/lib/cat-api";
import Actions from "./Actions";
import { ROUTES } from "@/config/routes";
import { Link } from "react-router";

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
    const [hasBreed, setHasBreed] = useState(false)

    useEffect(() => {
        if (!catId) {
            setCat(undefined)
            return;
        }

        fetchCatById({ catId }).then((value) => {
            setCat(value)
            setHasBreed(value.breeds?.[0] ? true : false)
        })
    }, [catId])

    const link = <Link className="text-blue-500 underline" to={ROUTES.BREED_DETAILS(cat?.breeds?.[0].id ?? "")}>{cat?.breeds?.[0].name}</Link>
    const breedLinkText = hasBreed ? <>This cat is of {link} breed</> : 'No breed details'

    return (
        <Modal isOpen={isOpen} title={'Cat Details'} onClose={onClose}>
            <img className="w-full h-120 object-contain object-center" src={cat?.url} />
            <div className="p-5">
                <p className="text-black text-start text-2xl py-5">{breedLinkText}</p>
                <Actions catIsFavourite={false} onAdToFavourites={() => { }} />
            </div>
        </Modal>
    )
}