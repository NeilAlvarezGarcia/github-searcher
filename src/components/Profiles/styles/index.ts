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
    grid-template-columns: 100%;
    grid-template-rows: 22rem;
    overflow: auto;
    
    ${setMediaQuery('500px', `
        grid-template-columns: repeat(2, 49%); 
    `)}
    ${tabletScreen(`
        grid-template-columns: repeat(3, 32%); 
    `)}
    ${smallComputerScreen(`
        grid-template-columns: repeat(4, 23.5%); 
    `)}
    ${bigComputerScreen(`
        grid-template-columns: repeat(5, 18.5%); 
    `)}
`