import { FormEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
type InputProps = {
    label: string;
    labelName: string;
    register?: UseFormRegisterReturn;
    error?: string;
    onchange?: (event: FormEvent<HTMLInputElement>) => void;
    maxlength?: number;
}

const Text = ({label, labelName, register, error, onchange, maxlength}: InputProps) => {
    return (
        <>
            <label htmlFor={label}>{labelName}</label>
            <input type="text" {...register} id={label} onChange={onchange} maxLength={maxlength} />
            {error && <p>{error}</p>}
        </>
    )
}
const Cpf = () => {
    return (
        <>
        </>
    )
}
const Select = ({label, labelName, register}: InputProps) => {
    return(
        <>
            <label htmlFor={label}>{labelName}</label>
            <select {...register} id={label}>
                <option value="">Selecione um valor</option>
                <option value="1">Algo 1</option>
            </select>
        </>
    )
}
export const Field = {Text, Select}