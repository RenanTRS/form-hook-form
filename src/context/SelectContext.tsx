import { createContext, useState } from "react"
import { useCity } from "../hooks/useCity";
import { IContextProps, ISelectContext } from "../interfaces/Form";
import { CitiesType, UfType } from "../types/Form"

export const SelectContext = createContext({} as ISelectContext)

export const SelectContextProvider = ({children}: IContextProps) => {
    const [ufs, setUfs] = useState<UfType[]>([])
    const [cities, setCities] = useState<CitiesType[]>([])
    
    const populateCity = async (uf:string) => {
        const response = await useCity(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`)
        setCities(response)
    }

    const value = {ufs, setUfs, cities, setCities, populateCity}
    
    return (
        <SelectContext.Provider value={value}>
            {children}
        </SelectContext.Provider>
    )
}