import { faBuilding } from "@fortawesome/free-regular-svg-icons"
import { FC } from "react"
import { styleAssinger } from "."
import { IconsProps } from "./interfaces/icon"

export const BuildingIcon: FC<IconsProps> = ({color, size}) => styleAssinger(faBuilding, color, size)