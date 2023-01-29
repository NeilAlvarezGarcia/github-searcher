import React, { FC } from 'react'
import { ProfileImageProps } from './interfaces'
import { AvatarContainer } from './styles'

const ProfileImage: FC<ProfileImageProps> = ({ avatar_url, ...rest }) => {
  return (
    <AvatarContainer {...rest}>
        <img src={avatar_url} alt='user github' />
    </AvatarContainer>
  )
}

export default ProfileImage