import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../../assets/styles/colors';
import { SubTitle, Text } from '../../assets/styles/variables';
import { Profile } from '../../context/interfaces';
import useAppContext from '../../context/UseContext';
import ProfileCard from '../Profile';
import ProfileModal from '../ProfileModal';
import UseGetProfiles from './hooks/UseGetProfiles';
import { GridProfileContainer, ProfilesContainer } from './styles'

const Profiles = () => {
  const profileContainer = useRef<HTMLElement>(null);
  const { inputSearch, profiles } = useAppContext();
  const { loading, error } = UseGetProfiles(inputSearch);
  const [ profile, setProfile ] = useState('');

  const setContainerOpen = (refNumbers = '0') => {
    if (!profileContainer.current) return
    profileContainer.current.style.flex = refNumbers;
    profileContainer.current.style.opacity = refNumbers;
}

  useEffect(() => {
    if (!profiles.length) return setContainerOpen();;
    setContainerOpen('1');
  }, [profiles])

  const handleProfileClick = (loginName: string) => {
    setProfile(loginName)
  }

  if (error) {
    return (
      <SubTitle 
        color={colors.red} 
        style={{
          padding: '0 1rem',
          textAlign: 'center',
        }}
      >
        {error}
      </SubTitle>
    )
  }

  return (
    <>
      {loading && (<Text color={colors.white} size='2rem'>loading...</Text>)}
      <ProfilesContainer ref={profileContainer}>
        <GridProfileContainer>
          {profiles?.map((profile: Profile) => (
            <ProfileCard key={profile.id} profile={profile} setProfile={handleProfileClick} />
          ))}
        </GridProfileContainer>
        {profile && (
          <ProfileModal 
            setClose={() => handleProfileClick('')}
            profileLoginName={profile}
          />
        )}
      </ProfilesContainer>
    </>
  )
}

export default Profiles