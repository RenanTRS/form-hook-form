import { FormEvent, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type InputProps = {
    label: string;
    labelName: string;
    register?: UseFormRegisterReturn;
    error?: string;
    onchange?: (event: FormEvent<HTMLInputElement>) => void;
    maxlength?: number;
    populate?: (event: FormEvent<HTMLSelectElement>) => void;
    children?: ReactNode;
}

export type FormInputType = {
    name?: string;
    email?: string;
    cpf?: string;
    cep?: string;
    uf?: string;
    city?: string;
    district?: string;
    street?: string;
    number?: string;
}

/*State*/
export type UfType = {
    id?: number;
    nome?: string;
    sigla?: string;
}

/*City*/
export type CitiesType = {
    id?: string;
    nome?: string;
}