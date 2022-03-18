import { InputProps } from "../../../../types/Form"
import { FormEvent, useEffect, useContext } from "react"
import { SelectContext } from "../../../../context/SelectContext"
import { useUf } from "../../../../hooks/useUf"
import { Field } from ".."

export const SelectState = ({label, labelName, register}: InputProps) => {    
    const {ufs, setUfs, populateCity} = useContext(SelectContext) //Context
    
    const populateUf = async () => { //Take states
        const response = await useUf('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        setUfs(response)
    }

    const populate = (event: FormEvent<HTMLSelectElement>) => {
        const {value} = event.currentTarget
        populateCity(value) //Take cities
    }

    useEffect(()=>{
        populateUf()
    }, [])

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
    const {cities} = useContext(SelectContext)

    return (
        <Field.Select label={label} labelName={labelName} register={register}>
            <option value="">Selecione uma Cidade</option>
            {cities &&
                cities.map(city => {
                    return (
                        <option key={city.id} value={city.nome}>{city.nome}</option>
                    )
                })
            }
        </Field.Select>
    )
}