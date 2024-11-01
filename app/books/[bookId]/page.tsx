"use  client"
import React from 'react'

interface Props{
    params: { bookId: string };
}

const BookPage = ({params:{bookId}}:Props) => {
  return (
    <div>BookPage {bookId}</div>
  )
}

export default BookPage