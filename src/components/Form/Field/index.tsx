import { FormEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { InputBlock } from "./style";
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
        <InputBlock>
            <label htmlFor={label}>{labelName}</label>
            <input type="text" {...register} id={label} onChange={onchange} maxLength={maxlength} />
            {error && <p>{error}</p>}
        </InputBlock>
    )
}

const Select = ({label, labelName, register}: InputProps) => {
    return(
        <div>
            <label htmlFor={label}>{labelName}</label>
            <select {...register} id={label}>
                <option value="">Selecione um valor</option>
                <option value="1">Algo 1</option>
            </select>
        </div>
    )
}
export const Field = {Text, Select}