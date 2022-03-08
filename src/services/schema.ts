import * as yup from 'yup'
//import {yupResolver} from '@hookform/resolvers/yup'
export const schema = yup.object({
    name: yup.string().required('O campo nome é obrigatório'),
    email: yup.string().email('Digite um email válido').required('O campo email é obrigatório'),
    cpf: yup.string().required('O campo cpf é obrigatório'),
    cep: yup.string().required('O campo cep é obrigatório'),
    uf: yup.string(),
    city: yup.string(),
    district: yup.string(),
    street: yup.string(),
    number: yup.string().required('O campo número é obrigatório')
}).required()