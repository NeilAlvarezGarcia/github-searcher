import React, { FC } from 'react'
import ReactDOM from 'react-dom'

import { ProfileModalProps } from './interfaces'
import ModalCard from './ui'

const ProfileModal: FC<ProfileModalProps> = (props) => {
  return ReactDOM.createPortal(
    <ModalCard {...props} />, 
    document.querySelector('#modal') as HTMLElement
)
}

export default ProfileModal