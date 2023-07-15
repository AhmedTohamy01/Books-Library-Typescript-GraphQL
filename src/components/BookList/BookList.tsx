import styled from 'styled-components'
import { Card, Button } from '@material-ui/core'
import { useQuery } from '@apollo/client'
import { GET_ALL_BOOKS } from '../../GraphQLQueries/GraphQLQueries'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { SetStateAction } from 'react'

type PropsType = {
  setBookID: React.Dispatch<SetStateAction<string>>
}

type ItemType = {
  id: string
  name: string
}

export default function BookList({ setBookID }: PropsType) {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS)

  if (loading)
    return (
      <>
        <Title>Click on any book to show the book information</Title>
        <StyledCard elevation={2}>
          <SpinnerWrapper>
            <Loader type='ThreeDots' color='#3f51b5' height={100} width={100} />
          </SpinnerWrapper>
        </StyledCard>
      </>
    )

  if (error)
    return (
      <>
        <Title>Click on any book to show the book information</Title>
        <StyledCard elevation={2}>
          <SpinnerWrapper>
            <img src='/sorry.png' width='240px' />I don't know how to say this
            to you ... <br />
            But, we couldn't contact the server to get data, please try again
            later !
          </SpinnerWrapper>
        </StyledCard>
      </>
    )

  return (
    <>
      <Title>Click on any book to show the book information</Title>
      <StyledCard elevation={2}>
        <div>
          {data.books.map((item: ItemType) => (
            <StyledButton
              key={item.id}
              variant='contained'
              color='primary'
              onClick={() => setBookID(item.id)}
            >
              {item.name}
            </StyledButton>
          ))}
        </div>
      </StyledCard>
    </>
  )
}

/*---> Styles <---*/
const StyledCard = styled(Card)`
  /* border: 1px solid red; */
  padding: 30px;
  display: flex;
  min-height: 335px;
`

const StyledButton = styled(Button)`
  /* border: 1px solid red; */
  padding: 30px;
  margin: 10px !important;
  text-transform: capitalize !important;
  height: 50px;
  white-space: nowrap;
`

const Title = styled.div`
  /* border: 1px solid red; */
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
`

const SpinnerWrapper = styled.div`
  /* border: 1px solid red; */
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
`
