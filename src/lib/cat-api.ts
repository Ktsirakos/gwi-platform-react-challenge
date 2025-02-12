import { fetchClient } from "./api-client"
import { Breed, Cat } from "@/types/cat-api-types"

export const fetchRandomCats = async ({
    limit = 10,
    filteredBreeds = []
}: { limit?: number, filteredBreeds?: string[] }) => {
    const filterByBreedQueryParams = filteredBreeds.length ? `?breed_ids=${filteredBreeds.join(",")}` : ''

    const response = await fetchClient(
        `/images/search/?limit=${limit}${filterByBreedQueryParams}`
    ) as Cat[]

    return response
}

export const fetchBreeds = async () => {
    const response = await fetchClient("/breeds") as Breed[]
    return response
}