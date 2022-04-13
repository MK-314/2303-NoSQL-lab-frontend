import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { FetchApi } from './datahandler'
import DefaultBtn from './components/DefaultBtn'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-right: 2rem;
  margin-left: 2rem;
  border-radius: 4px;
  background-color: #444343;
`
const H1Text = styled.p`
  text-transform: uppercase;
  color: #fff;
  font-size: 2rem;
  padding: 2rem 0;
  letter-spacing: 1.2rem;
  @media (max-width: 900px) {
    font-size: 1.2rem;
    text-align: center;
  }
`
const MainContent = styled.div`
  margin-top: 4rem;
  /* margin-left: 2rem; */
  /* margin-right: 2rem; */
`
const BoxForInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  padding: 1rem 0rem;
  width: 100%;
`
const LabelText = styled.p`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  padding-bottom: 0.5rem;
  margin-top: 2rem;
`

const CustomInput = styled.input`
  font-size: 1.6rem;
  color: #ccc;
  text-align: center;
  background-color: #444444;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 4px;
  width: 30%;
  transition: all 0.2s;
  ::placeholder {
    font-weight: 100;
    color: #ccc;
  }
`
function App () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showmessage, setShowmessage] = useState(false)
  const authHandler = () => {
    FetchApi.checkAuth(
      {
        username: username,
        password: password
      },
      message => {
        setShowmessage(message)
      },
      err => {
        alert(err)
      }
    )
  }
  return (
    <div>
      <Container>
        <H1Text>Access to secret information:</H1Text>
      </Container>
      <MainContent>
        <BoxForInput>
          <LabelText>UserName:</LabelText>
          <CustomInput
            value={username}
            onChange={newValue => setUsername(newValue.target.value)}
          />
        </BoxForInput>
        <BoxForInput>
          <LabelText>Password:</LabelText>
          <CustomInput
            value={password}
            onChange={newValue => setPassword(newValue.target.value)}
          />
        </BoxForInput>
        <DefaultBtn btnClicked={authHandler} />
        {showmessage && (
          <LabelText>
            Secret List: 
            <br /> 1. Alex: account number: #000435111777555 
            <br /> 2. George: account number: #000435111777888
            <br /> 3. Michael: account number: #0004351117123
          </LabelText>
        )}
      </MainContent>
    </div>
  )
}

export default App
