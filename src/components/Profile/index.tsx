import React, { FC } from 'react'
import { SubTitle } from '../../assets/styles/variables'
import ProfileImage from '../../common/ProfileImage'
import { ProfileProps } from './interfaces'
import { ProfileContainer } from './styles'

const Profile: FC<ProfileProps> = ({ profile, setProfile }) => {
  return (
    <ProfileContainer onClick={() => setProfile(profile.login)}>
      <ProfileImage avatar_url={profile.avatar_url} />
      <SubTitle style={{maxWidth: '100%', wordWrap: 'break-word', textAlign: 'center'}}>{profile.login}</SubTitle>
    </ProfileContainer>
  )
}

export default Profile