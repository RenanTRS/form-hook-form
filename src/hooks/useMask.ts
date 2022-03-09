import { FormEvent } from 'react';

export const useMask = (event: FormEvent<HTMLInputElement>) => {
    const {name} = event.currentTarget
    if(name === 'cpf'){
        let {value} = event.currentTarget
        value = value?.replace(/\D/g, '')
        value = value.replace(/(\d{3})(\d)/, '$1.$2')
        value = value.replace(/(\d{3})(\d)/, '$1.$2')
        value = value.replace(/(\d{3})(\d)/, '$1-$2')
    
        return event.currentTarget.value = value
    }
    if(name === 'cep'){
        let {value} = event.currentTarget
        value = value.replace(/\D/g, '')
        value = value.replace(/(\d{5})(\d)/, '$1-$2')

        return event.currentTarget.value = value
    }


    //pegar valor pelo name e fazer máscara para cep usando condicional
}