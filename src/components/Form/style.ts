import styled from 'styled-components'
export const Container = styled.form`
    display: flex;
    flex-direction: column;

    background: ${props => props.theme.colors.container};

    padding: 2rem;

    border-radius: 1rem;

    width: 50%;

    button {
        background: ${props => props.theme.colors.submit};
        
        font-weight: bold;
        font-size: 2rem;
        color: ${props => props.theme.colors.submitText};

        border: none;
        border-radius: 1.5rem;

        height: 4rem;
        width: 50%;

        margin: 1rem auto;

        cursor: pointer;

        &:active {
            background: ${props => props.theme.colors.submitHover};
        }
    }
`