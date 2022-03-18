import { InputProps } from "../../../../types/Form"
import { FormEvent, useEffect, useContext } from "react"
import { SelectContext } from "../../../../context/SelectContext"
import { useUf } from "../../../../hooks/useUf"
import { Field } from ".."
import { useCity } from "../../../../hooks/useCity"


export const SelectState = ({label, labelName, register}: InputProps) => {    
    const {setCity, ufs, setUfs, setCities} = useContext(SelectContext)
    
    const populateUf = async () => {
        const response = await useUf('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        setUfs(response)
    }
    const populateCity = async (uf: string) => {
        const response = await useCity(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`)
        setCities(response)
    }
    const populate = (event: FormEvent<HTMLSelectElement>) => {
        const {value} = event.currentTarget
        populateCity(value)
        setCity(true)
    }
    useEffect(()=>{
        populateUf()
    },[])

    return (
        <Field.Select label={label} labelName={labelName} register={register} populate={(event) => populate(event)}>
            <option value="">Selecione um Estado</option>
            {ufs &&
                ufs.map(uf => {
                    return (
                        <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                    )
                })
            }
        </Field.Select>
    )
}

export const SelectCity = ({label, labelName, register}: InputProps) => {
    const {city, cities} = useContext(SelectContext)
    return (
        <Field.Select label={label} labelName={labelName} register={register}>
            <option value="">Selecione uma Cidade</option>
            {city &&
                cities?.map(city => {
                    return (
                        <option key={city.id} value={city.nome}>{city.nome}</option>
                    )
                })
            }
        </Field.Select>
    )
}