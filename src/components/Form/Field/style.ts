import styled from 'styled-components'

export const InputBlock = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    position: relative;

    padding-bottom: 2rem;

    label{
        color: ${props => props.theme.colors.text};
        font-size: 2rem;
    }
    input{
        border: none;
        background: ${props => props.theme.colors.container};
        
        border-bottom: .2rem solid ${props => props.theme.colors.text};

        padding: 1rem;
    }
    p{
        position: absolute;
        bottom: .5rem;

        font-weight: bold;
        color: ${props => props.theme.colors.error};
    }
`
export const SelectBlock = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 2rem;
    
    @media (max-width: 415px){
        flex-wrap:wrap;
        gap: 2rem;
        width: 100%;
    }
    @media (min-width: 415px){
    }

    div{
        display: flex;
        flex-direction: column;
        
        @media (max-width: 415px){
            width: 100%;
        }
        @media (min-width: 416px){
            width: 45%;
        }
    }
    label{
        color: ${props => props.theme.colors.text};
        font-size: 2rem;
    }
    select{
        border: none;
        
        height: 4rem;
        
        padding: 1rem;

        border-radius: .6rem .6rem 0 0;

        background: ${props => props.theme.colors.select};
        option{
            padding: 4rem;
        }
    }
`