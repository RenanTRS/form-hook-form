import { useFetch } from './useFetch';

export const useUf = async (url: string) => {

    const response = await useFetch(url)
    
    return response
}