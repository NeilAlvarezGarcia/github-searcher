import React from 'react'
import { SearchIcon } from '../../assets/icons/Search.icon'
import { Title } from '../../assets/styles/variables'
import useAppContext from '../../context/UseContext'
import { Form, Input, InputContainer, SearchContainer } from './styles'

const Searcher = () => {
  const { inputSearch, setInputSearch } = useAppContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputSearch(e.target.value.trim())

  return (
    <SearchContainer>
      <Title>Github Profile Searcher</Title>
      <Form onSubmit={e => e.preventDefault()}>
        <InputContainer>
          <Input
            placeholder='Type a Github profile name' 
            value={inputSearch}
            onChange={handleChange}
          />
          <SearchIcon />
        </InputContainer>
      </Form>
    </SearchContainer>
  )
}

export default Searcher