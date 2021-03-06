import { validateCEP } from './validateCEP';
import { validateCPF } from 'validations-br';
import * as yup from 'yup'

export const schema = yup.object({
    name: yup.string().required('O campo nome é obrigatório'),
    email: yup.string().email('Digite um email válido').required('O campo email é obrigatório'),
    cpf: yup.string().required('O campo cpf é obrigatório').test('is-cpf', 'Digite um cpf válido', async (value)=>{
        const cpf = String(value)
        return validateCPF(cpf)
    }),
    cep: yup.string().required('O campo cep é obrigatório').test('is-cep', 'Digite um cep válido', async (value)=>{
        const cep = String(value)
        return validateCEP(cep)
    }),

    uf: yup.string(),
    city: yup.string(),
    district: yup.string(),
    street: yup.string(),
    number: yup.string().required('O campo número é obrigatório')
}).required()