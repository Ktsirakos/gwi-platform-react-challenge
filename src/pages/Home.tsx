import { ROUTES } from "@/config/routes";
import { useEffect } from "react"
import { useNavigate } from "react-router"

export default function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        //Navigate on load
        navigate(ROUTES.CATS)
    })

    return (
        <></>
    )
}