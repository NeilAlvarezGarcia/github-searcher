import React, { FC } from 'react'
import { BookIcon } from '../../../assets/icons/Book.icon'
import { BuildingIcon } from '../../../assets/icons/Building.icon'
import { LocationDot } from '../../../assets/icons/LocationDot.icon'
import { UsersIcon } from '../../../assets/icons/User.icon'
import { colors } from '../../../assets/styles/colors'
import { SubTitle, Text } from '../../../assets/styles/variables'
import ProfileImage from '../../../common/ProfileImage'
import { Profile } from '../../../context/interfaces'
import useGetProfile from '../hooks/useGetProfile'
import { ProfileModalProps } from '../interfaces'
import { BodyContent, Button, ButtonsContainer, Card, HeaderCard, HeaderInfo, ModalContainer } from '../styles'

const ModalCard: FC<ProfileModalProps> = ({ setClose, profileLoginName }) => {
  const { profileData, error } = useGetProfile(profileLoginName);

  const printUserInfo = (profileData: Profile) => {

    const { 
      avatar_url, name, 
      login, bio, 
      company, location,
      public_repos, followers, 
      following, blog, html_url 
    } = profileData

    return (
      <>
        <HeaderCard>
          <ProfileImage avatar_url={avatar_url} />
          <HeaderInfo>
            {name && <SubTitle size='2.5rem'>{name}</SubTitle>}
            <Text size='1.7rem' color={colors.grey}>{login}</Text>
            {location && <Text size='1.5rem' color={colors.grey}> <LocationDot /> {location}</Text>}
          </HeaderInfo>
        </HeaderCard>
        {bio && <Text color={colors.grey}>{bio}</Text>}


        <BodyContent>
          <div>
            {company && <Text color={colors.grey}> <BuildingIcon /> {company}</Text>}
            {public_repos > 0 && <Text color={colors.grey}> <BookIcon /> {public_repos} {public_repos > 1 ?  ' repositories' :  'repository'}</Text>}
          </div>
          <div>
            {followers > 0 && <Text color={colors.grey}> <UsersIcon /> {followers} follower{followers > 1 && 's'}</Text>}
            {following > 0 && <Text color={colors.grey}>{following} following</Text>}
          </div>
        </BodyContent>  
          
        <ButtonsContainer>
          {blog && <Button href={blog} target='blank'>Go to My blog</Button>}
          <Button href={html_url} target='blank'>Go to Github Profile</Button>
        </ButtonsContainer>
      </>
    )
  }

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
            {profileData && printUserInfo(profileData)}
          </>
        )}
      </Card>
    </ModalContainer>
  )
}

export default ModalCard