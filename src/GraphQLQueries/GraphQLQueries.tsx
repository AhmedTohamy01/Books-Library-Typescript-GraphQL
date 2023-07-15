import { gql } from '@apollo/client'

export const GET_ALL_BOOKS = gql`
  query {
    books {
      name
      id
    }
  }
`

export const GET_ALL_AUTHORS = gql`
  query {
    authors {
      name
      id
    }
  }
`

export const GET_BOOK = gql`
  query ($bookID: Int!) {
    books_by_pk(id: $bookID) {
      name
      genre
      author {
        name
        books {
          name
        }
      }
    }
  }
`

export const ADD_AUTHOR = gql`
  mutation ($name: String!, $age: Int!) {
    insert_authors_one(object: { name: $name, age: $age }) {
      name
      age
    }
  }
`

export const ADD_BOOK = gql`
  mutation ($name: String!, $genre: String!, $author_id: Int!) {
    insert_books_one(
      object: { name: $name, genre: $genre, author_id: $author_id }
    ) {
      name
      genre
    }
  }
`
