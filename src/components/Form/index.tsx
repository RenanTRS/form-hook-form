import { useForm } from 'react-hook-form'
import { schema } from '../../services/schema';
import {yupResolver} from '@hookform/resolvers/yup'

import {Container} from './style'
import { Field } from './Field'
import { useMask } from '../../hooks/useMask'
import { useFetch } from '../../hooks/useFetch'
import { FormEvent, useCallback, useEffect, useState } from 'react'
import { SelectBlock } from './Field/style';
import { useUf } from '../../hooks/useUf';
import { useCity } from '../../hooks/useCity';
import { FormInputType } from '../../types/Form';
import { UfType } from '../../types/Form';
import { CitiesType } from '../../types/Form';

export const Form = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormInputType>({resolver: yupResolver(schema)});
    
    const newUser = (data: FormInputType) => {
        console.log(data)
    }
    const handleMask = useCallback((event: FormEvent<HTMLInputElement>)=>{
        useMask(event)
    },[])

    const populateUf = async () => {
        const response = await useUf('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        setUfs(response)
    }
    const populateCity = async (uf: string) => {
        const response = await useCity(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`)
        setCities(response)
    }
    useEffect(()=>{
        populateUf()
    },[])
    const [ufs, setUfs] = useState<UfType[]>([])
    const [city, setCity] = useState<boolean>(false)
    const [cities, setCities] = useState<CitiesType[]>([])
    
    const populate = (event: FormEvent<HTMLSelectElement>) => {
        const {value} = event.currentTarget
        populateCity(value)
        setCity(true)
    }
    
    const getData = async (event: FormEvent<HTMLInputElement>) => {
        let {value} = event.currentTarget
        value = value.replace(/\D/g, '')
        if(value.length === 8){
            const data = await useFetch(`https://viacep.com.br/ws/${value}/json/`)
            console.log(data)
        }
        //Pendente ....
    }
    

    return (
        <Container onSubmit={handleSubmit(newUser)}>
            <Field.Text label={'name'} labelName={'Nome'} register={register('name')} error={errors.name?.message}/>
            
            <Field.Text label={'email'} labelName={'Email'} register={register('email')} error={errors.email?.message}/>

            <Field.Text label={'cpf'} labelName={'CPF'} register={register('cpf')} error={errors.cpf?.message} onchange={handleMask} maxlength={14} />

            <Field.Text label={'cep'} labelName={'CEP'} register={register('cep', {onBlur:getData})} error={errors.cep?.message} onchange={handleMask} maxlength={9} />

            <SelectBlock>
                <Field.Select label={'uf'} labelName={'Estado'} register={register('uf')} populate={(event)=>populate(event)}>
                    <option value="">Selecione um estado</option>
                    {ufs &&
                        ufs.map((uf)=>{
                            return(
                                <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                            )
                        })
                    }
                </Field.Select>
                <Field.Select label={'city'} labelName={'Cidade'} register={register('city')}>
                    <option value="">Selecione uma cidade</option>
                    {city &&
                        cities.map((city)=>{
                            return(
                                <option key={city.id} value={city.nome}>{city.nome}</option>
                            )
                        })
                    }
                </Field.Select>
            </SelectBlock>

            <Field.Text label={'district'} labelName={'Bairro'} register={register('district')} />

            <Field.Text label={'street'} labelName={'Rua'} register={register('street')} />

            <Field.Text label={'number'} labelName={'Número'} register={register('number')} error={errors.number?.message} />

            <button type="submit">Enviar</button>
        </Container>
    )
}