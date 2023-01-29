import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";
import { border } from "../../../assets/styles/variables";

export const AvatarContainer = styled.figure<{
    size?: number
}>`
    ${({ size = 11 }) =>  `
        width: ${size}rem;
        height: ${size}rem;
        min-width: ${size}rem;
        min-height: ${size}rem;
    `}
    overflow: hidden;
    border-radius: 50%;
    border: ${border('.2rem', `${colors.black}5`)}
`