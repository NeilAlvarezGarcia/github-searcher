import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";
import { tabletScreen } from "../../../assets/styles/mediaQueries";

export const ProfileContainer = styled.div`
    background-color: ${colors.white};
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    height: 100%;
    cursor: pointer;
    padding: 2rem;
    transition: box-shadow ease-out .2s;

    ${tabletScreen(`
        &:hover {
            box-shadow: 0 0 10px 3px ${colors.white}6;
        }
    `)}
`;
