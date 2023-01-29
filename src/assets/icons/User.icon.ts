import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { FC } from "react"
import { styleAssinger } from "."
import { IconsProps } from "./interfaces/icon"

export const UsersIcon: FC<IconsProps> = ({color, size}) => styleAssinger(faUsers, color, size)