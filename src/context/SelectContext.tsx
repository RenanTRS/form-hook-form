import { createContext, useState } from "react"
import { IContextProps, ISelectContext } from "../interfaces/Form";
import { CitiesType, UfType } from "../types/Form"

export const SelectContext = createContext({} as ISelectContext)

export const SelectContextProvider = ({children}: IContextProps) => {
    const [ufs, setUfs] = useState<UfType[]>([])
    const [city, setCity] = useState<boolean>(false)
    const [cities, setCities] = useState<CitiesType[]>([])
    
    const value = {ufs, setUfs, city, setCity, cities, setCities}
    
    return (
        <SelectContext.Provider value={value}>
            {children}
        </SelectContext.Provider>
    )
}