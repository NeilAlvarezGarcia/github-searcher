import React, { FC } from 'react'
import { colors } from '../../../assets/styles/colors'
import { SubTitle, Text } from '../../../assets/styles/variables'
import ProfileImage from '../../../common/ProfileImage'
import useGetProfile from '../hooks/useGetProfile'
import { ProfileModalProps } from '../interfaces'
import { Card, ModalContainer } from '../styles'

const ModalCard: FC<ProfileModalProps> = ({ setClose, profileLoginName }) => {
  const { profileData, error } = useGetProfile(profileLoginName);

  return (
    <ModalContainer onClick={setClose}>
      <Card onClick={(e) => e.stopPropagation()}>
        {error ? (
          <SubTitle 
            color={colors.red} 
            style={{
              padding: '0 1rem',
              textAlign: 'center',
            }}
          >
            {error}
          </SubTitle>
        ) : (
          <>
            {profileData && (
              <>
                <ProfileImage avatar_url={profileData.avatar_url} size={12} />
                <SubTitle>{profileData.name}</SubTitle>
                <Text>{profileData.login}</Text>
                <Text>{profileData.bio}</Text>

                <Text>{profileData.company}</Text>
                <Text>{profileData.location}</Text>
                <Text>{profileData.email}</Text>
                <Text>{profileData.public_repos}</Text>
                <Text>{profileData.followers}</Text>
                <Text>{profileData.following}</Text>

                <Text><a href={profileData.blog} target='blank'>Go to My blog</a></Text>
                <Text><a href={profileData.html_url} target='blank'>Go to Github Profile</a></Text>
              </>
            )}
          </>
        )}
      </Card>
    </ModalContainer>
  )
}

export default ModalCard