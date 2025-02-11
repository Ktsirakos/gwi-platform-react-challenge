const BASE_URL = 'https://api.thecatapi.com/v1'

async function fetchClient<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers,
    })

    if (!response.ok) {
        const error = await response.json().catch(() => ({
            message: 'An unexpected error occurred',
        }))

        throw {
            message: error.message,
            status: response.status,
        }
    }

    return response.json()
}

export { fetchClient }