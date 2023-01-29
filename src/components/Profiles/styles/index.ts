import styled from "styled-components";
import { bigComputerScreen, setMediaQuery, smallComputerScreen, tabletScreen } from "../../../assets/styles/mediaQueries";

export const ProfilesContainer = styled.main`
    flex: 0;
    opacity: 0;
    width: 100%;
    transition: all ease .5s;
    overflow: hidden; 
`;

export const GridProfileContainer = styled.section`
    height: 100%;
    padding: 1rem 5rem 5rem;
    gap: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20rem;
    overflow-y: auto;
    
    ${setMediaQuery('500px', `
        grid-template-columns: repeat(2, 1fr); 
    `)}
    ${tabletScreen(`
        grid-template-columns: repeat(3, 1fr); 
    `)}
    ${smallComputerScreen(`
        grid-template-columns: repeat(3, 1fr); 
    `)}
    ${bigComputerScreen(`
        grid-template-columns: repeat(5, 1fr); 
    `)}
`