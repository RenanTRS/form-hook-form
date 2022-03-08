import 'styled-components'
import { string } from 'yup'
declare module 'styled-components'
export interface DefaultTheme{
    colors: {
        background: string;
        container: string;
        text: string;
        error: string;
        submit: string;
        submitHover: string;
        submitText: string;
    }
}