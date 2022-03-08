import styled from 'styled-components'
export const Container = styled.form`
    display: flex;
    flex-direction: column;

    background: ${props => props.theme.colors.container};

    padding: 2rem;
`