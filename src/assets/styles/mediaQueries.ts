import { css } from "styled-components";

export const setMediaQuery = (width: string, styles: string) => css`
    @media (min-width: ${width}) {
        ${styles}
    }
`
export const tabletScreen = (styles: string) => setMediaQuery('756px', styles);
export const smallComputerScreen = (styles: string) => setMediaQuery('1000px', styles);
export const bigComputerScreen = (styles: string) => setMediaQuery('1200px', styles);