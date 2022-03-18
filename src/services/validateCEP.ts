import { validateCep } from 'validations-br'
import { useFetch } from '../hooks/useFetch'

export const validateCEP = async (cep: string) => {
    if(await validateCep(cep) && await useFetch(`https://viacep.com.br/ws/${cep}/json/`)){
        //If exists
        return true
    } else {
        return false
    }
}