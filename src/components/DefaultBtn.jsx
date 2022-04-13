import React from 'react'
import styled from 'styled-components'

const CenteredRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-bottom: 10rem; */
  /* background-color: aqua; */
`

const NewRecordBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 4rem;
  /* background-color: #831f1f; */
`

const NewRecordLink = styled.p`
  text-align: center;
  color: #ccc;
  font-size: 1.5rem;
  letter-spacing: 1.001rem;
`

const WrapTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 7rem;
`

const DefaultBtn = props => {
  return (
    <CenteredRow>
      <NewRecordBtn
        onClick={() => {
          props.btnClicked()
        }}
      >
        <WrapTag>
          <NewRecordLink>LOG IN</NewRecordLink>
        </WrapTag>
      </NewRecordBtn>
    </CenteredRow>
  )
}

export default DefaultBtn
