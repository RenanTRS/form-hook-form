import { InputBlock } from "./style";
import { InputProps } from "../../../types/Form"

const Text = ({label, labelName, register, error, onchange, maxlength}: InputProps) => {
    return (
        <InputBlock>
            <label htmlFor={label}>{labelName}</label>
            <input type="text" {...register} id={label} onChange={onchange} maxLength={maxlength} />
            {error && <p>{error}</p>}
        </InputBlock>
    )
}
const Number = ({label, labelName, register, error, onchange, maxlength}: InputProps) => {
    return (
        <InputBlock>
            <label htmlFor={label}>{labelName}</label>
            <input type="text" inputMode="numeric" {...register} id={label} onChange={onchange} maxLength={maxlength} />
            {error && <p>{error}</p>}
        </InputBlock>
    )
}

const Select = ({label, labelName, register, children, populate}: InputProps) => {
    return(
        <div>
            <label htmlFor={label}>{labelName}</label>
            <select {...register} id={label} onChange={populate}>
                {children}
            </select>
        </div>
    )
}
export const Field = {Text, Select, Number}