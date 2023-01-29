import { faBook } from "@fortawesome/free-solid-svg-icons"
import { FC } from "react"
import { styleAssinger } from "."
import { IconsProps } from "./interfaces/icon"

export const BookIcon: FC<IconsProps> = ({color, size}) => styleAssinger(faBook, color, size)