import styled from "styled-components"
import { colors } from "./colors"

export const border = (weight?: string | number, color?: string): string => `${weight || 'thin'} ${color || colors.black} solid`

export const Title = styled.h1<{
    size?: string
    color?: string
}>`
    text-transform: capitalize;
    font-size: ${({size}) => size};
    color: ${({color}) => color};
`
export const SubTitle = styled.h2<{
    size?: string
    color?: string
}>`
    text-transform: capitalize;
    font-size: ${({size}) => size};
    color: ${({color}) => color};
`

export const Text = styled.p<{
    size?: string
    color?: string
}>`
    font-size: ${({size}) => size || '2rem'};
    color: ${({color}) => color};
`