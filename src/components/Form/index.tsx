import { Field } from './Field'

import { useForm } from 'react-hook-form'
import { schema } from '../../services/schema';
import {yupResolver} from '@hookform/resolvers/yup'
import {Container} from './style'
export const Form = () => {

    type FormInputType = {
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
    const {register, handleSubmit, formState: {errors}} = useForm<FormInputType>({resolver: yupResolver(schema)});
    
    const newUser = (data: FormInputType) => {
        console.log(data)
    }

    return (
        <Container onSubmit={handleSubmit(newUser)}>
            <Field.Text label={'name'} labelName={'Nome'} register={register('name')} error={errors.name?.message}/>
            
            <Field.Text label={'email'} labelName={'Email'} register={register('email')} error={errors.email?.message}/>

            <Field.Text label={'cpf'} labelName={'CPF'} register={register('cpf')} error={errors.cpf?.message} />

            <Field.Text label={'cep'} labelName={'CEP'} register={register('cep')} error={errors.cep?.message} />

            <Field.Select label={'uf'} labelName={'Estado'} register={register('uf')} />

            <Field.Select label={'city'} labelName={'Cidade'} register={register('city')} />

            <Field.Text label={'district'} labelName={'Bairro'} register={register('district')} />

            <Field.Text label={'street'} labelName={'Rua'} register={register('street')} />

            <Field.Text label={'number'} labelName={'Número'} register={register('number')} error={errors.number?.message} />

            <button type="submit">Enviar</button>
        </Container>
    )
}