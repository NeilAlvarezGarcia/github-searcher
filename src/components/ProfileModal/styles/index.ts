import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";
import { tabletScreen } from "../../../assets/styles/mediaQueries";

export const ModalContainer = styled.section`
    position: fixed;
    inset: 0;
    z-index: 2;
    background-color: ${`${colors.black}5`};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Card = styled.div`
    width: min(90%, 50rem);
    background-color: ${colors.white};
    border-radius: 2rem;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    ${tabletScreen(`
        padding: 3rem;
    `)}
`

export const HeaderCard = styled.header`
    width: 100%;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    margin-bottom: 2rem;
`
export const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: .4rem;
`

export const BodyContent = styled.div`
    margin: 1.5rem 0 3rem;
    width: 100%;
    gap: 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    div {
        display: inherit;
        flex-direction: column;
        gap: 1.5rem;
    }
`

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${tabletScreen(`
        width: 80%;
    `)}
`

export const Button = styled.a`
    transition: background-color ease .3s;
    padding: 1rem 2rem;
    border-radius: .5rem;
    background-color: ${colors.blueGrey};
    color: ${colors.white};
    font-size: 1.4rem;
    
    ${tabletScreen(`
        background-color: ${colors.grey};
        &:hover {
            background-color: ${colors.blueGrey};
        }
    
    `)}

    
    
`