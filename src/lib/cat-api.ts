import { fetchClient } from "./api-client"

export const fetchRandomCats = async ({
    limit = 10
}: { limit?: number }) => {
    const response = await fetchClient(`/images/search/?limit=${limit}`)
    return response
}

export const fetchBreeds = async () => {
    const response = await fetchClient("/breeds")
    return response
}