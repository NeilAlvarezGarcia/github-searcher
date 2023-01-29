import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";

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
    height: 70%;
    width: min(90%, 50rem);
    background-color: ${colors.white};
    border-radius: 2rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`