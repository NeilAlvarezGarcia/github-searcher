import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors } from "../styles/colors"

export const styleAssinger = (icon: IconDefinition, color?: string, size?: number, styles?: any) => {
    return <FontAwesomeIcon icon={icon} style={{
        ...styles,
        color: color || colors.black,
        fontSize: `${size || 2}rem`,
    }} />
}
