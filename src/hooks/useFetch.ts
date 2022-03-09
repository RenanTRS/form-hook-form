import axios from 'axios'

export const useFetch = async (url: string) => {

    const response = await axios.get(url)
    if(response.data.erro){
        return false
    }

    return response.data
}