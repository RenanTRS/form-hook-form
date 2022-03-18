import { Dispatch, ReactNode, SetStateAction } from 'react'
import { CitiesType, UfType } from '../types/Form';

export interface IContextProps {
    children: ReactNode;
}

export interface ISelectContext {
    ufs: UfType[];
    setUfs: Dispatch<SetStateAction<UfType[]>>;
    cities?: CitiesType[];
    setCities: Dispatch<SetStateAction<CitiesType[]>>
    populateCity: (uf: string) => void;
}