import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const AppContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    height: 100vh;
    overflow: hidden;
    background-color: ${colors.redGrey};
`