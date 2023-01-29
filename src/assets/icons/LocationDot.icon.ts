import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FC } from "react"
import { styleAssinger } from "."
import { IconsProps } from "./interfaces/icon"

export const LocationDot: FC<IconsProps> = ({color, size}) => styleAssinger(faLocationDot, color, size)