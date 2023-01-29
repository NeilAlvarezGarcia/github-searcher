import { useCallback, useEffect, useState } from 'react'
import { Profile } from '../../../context/interfaces'

const useGetProfile = (profile: string) => {
    const [profileData, setProfileData] = useState<Profile>()
    const [error, setError] = useState('')

    const getProfile = useCallback(async () => {
        try {
            const data = await (await fetch(`https://api.github.com/users/${profile}`)).json();
            if (!data) throw new Error('Sorry, profile not found :(')

            setProfileData(data)
        } catch (err: any) {
            setError(err.msg)
        }
    }, [profile])

    useEffect(() => {
        getProfile();
    }, [getProfile])

  return { profileData, error }
}

export default useGetProfile