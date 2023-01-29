import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FC } from "react"
import { styleAssinger } from "."
import { IconsProps } from "./interfaces/icon"

export const SearchIcon: FC<IconsProps> = ({color, size}) => styleAssinger(faMagnifyingGlass, color, size, {cursor: 'pointer'})