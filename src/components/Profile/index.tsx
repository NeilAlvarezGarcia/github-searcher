import React, { FC } from 'react'
import ProfileImage from '../../common/ProfileImage'
import { ProfileProps } from './interfaces'
import { ProfileContainer } from './styles'

const Profile: FC<ProfileProps> = ({ profile, setProfile }) => {
  return (
    <ProfileContainer onClick={() => setProfile(profile.login)}>
      <ProfileImage avatar_url={profile.avatar_url} />
      <h2>{profile.login}</h2>
    </ProfileContainer>
  )
}

export default Profile