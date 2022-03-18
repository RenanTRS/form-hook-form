import { Dispatch, ReactNode, SetStateAction } from 'react'
import { CitiesType, UfType } from '../types/Form';

export interface IContextProps {
    children: ReactNode;
}

export interface ISelectContext {
    ufs: UfType[];
    setUfs: Dispatch<SetStateAction<UfType[]>>;
    city: boolean;
    setCity: Dispatch<SetStateAction<boolean>>;
    cities?: CitiesType[];
    setCities: Dispatch<SetStateAction<CitiesType[]>>
}