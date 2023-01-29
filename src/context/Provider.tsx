import React, { FC, useCallback, useState } from 'react'
import { AppContext } from '.'
import { Profile, ProviderProps } from './interfaces'

const Provider: FC<ProviderProps> = ({ children }) => {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [inputSearch, setInputSearch] = useState<string>('');

  const state = useCallback(()  => ({
    profiles,
    inputSearch,
    setProfiles,
    setInputSearch
  }), [profiles, inputSearch])

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  )
}

export default Provider