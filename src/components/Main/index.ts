import styled from "styled-components"
export const Main = styled.main`
    background: ${props => props.theme.colors.background};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    min-height: 100vh;
    width: 100%;
    
    padding-top: 2rem;

    @media (min-width: 770px){
        padding: 2rem;
    }

    h2{
        color: $${props => props.theme.colors.text};
        font-size: 2rem;
        margin-bottom: 1rem;
    }
`