import { useFetch } from './useFetch';
export const useCity = async (url: string) => {
    const response = await useFetch(url)

    return response
}