import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";
import { tabletScreen } from "../../../assets/styles/mediaQueries";
import { border } from "../../../assets/styles/variables";

export const SearchContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: min(90%, 80rem);
    padding-top: 2rem;
`

export const Form = styled.form`
    width: min(100%, 300rem);
`

export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    border: ${border()};
    border-radius: 1rem;
    padding: 1rem 2rem;
    gap: 1rem;
    transition: box-shadow ease .3s;

    ${tabletScreen(`
        &:hover {
            box-shadow: 0 0 20px ${colors.black}5;
        }
    `)}
`

export const Input = styled.input`
    width: 100%;
    font-size: 2rem;
    background-color: ${colors.transparent};
`