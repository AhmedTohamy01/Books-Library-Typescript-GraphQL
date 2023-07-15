import React, { useState } from 'react'
import styled from 'styled-components'
import BookList from '../components/BookList/BookList'
import Display from '../components/Display/Display'
import { AddCircle } from '@styled-icons/fluentui-system-filled/'
import Modal from '../components/Modal/Modal'

export default function HomaPage() {
  const [bookID, setBookID] = useState<any>()
  const [showModal, setShowModal] = useState(false)

  return (
    <PageWrapper>
      <Title>Books Library</Title>
      <ContentWrapper>
        <LeftWrapper>
          <BookList setBookID={setBookID} />
        </LeftWrapper>
        <RightWrapper>
          <Display bookID={bookID} />
        </RightWrapper>
      </ContentWrapper>
      <AddIcon onClick={() => setShowModal(true)} />
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </PageWrapper>
  )
}

/*---> Styles <---*/
const PageWrapper = styled.div`
  /* border: 1px solid red; */
`

const Title = styled.div`
  /* border: 1px solid red; */
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`

const ContentWrapper = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
`

const LeftWrapper = styled.div`
  /* border: 1px solid green; */
  width: 65%;
  padding: 30px;
`

const RightWrapper = styled.div`
  /* border: 1px solid black; */
  width: 35%;
  padding: 30px;
`

const AddIcon = styled(AddCircle)`
  /* border: 1px solid black; */
  width: 70px;
  position: fixed;
  left: 93vw;
  bottom: 10px;
  color: #3f51b5;
  cursor: pointer;
`
