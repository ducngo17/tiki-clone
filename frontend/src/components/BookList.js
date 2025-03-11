import React, { useContext, useEffect } from 'react'
import Book from './Book'
import { dataContext } from '../App'
import axios from 'axios'

const BookList = () => {
  const { books, handleBooks, isFiltered, query, numOfShowMoreClicked, handleNumOfShowMoreClicked, filteredClick } = useContext(dataContext)

  useEffect(() => {
    //if dont have if statement, the first time this callback called is when query = '' --> call wrong api --> error
    if (query !== '') {
      axios.get(`http://localhost:4000/products/list/${query}`, {
        mode: 'no-cors' //not safe in production
      })
        .then(response => {
          {if (isFiltered) {
            handleBooks(response.data)
            // handleNumOfShowMoreClicked()
          }
          }
        });
    }
    else {
      axios.get(`http://localhost:4000/products/showmore/${numOfShowMoreClicked}`, {
        mode: 'no-cors'
      })
        .then(response => {
          // console.log(numOfShowMoreClicked)
          handleBooks(response.data)
        });
    }
  }, [isFiltered, numOfShowMoreClicked]);

  const handleShowMore = () => {
    handleNumOfShowMoreClicked()
    // console.log(numOfShowMoreClicked)
  }

  return (
    <div className='book-list'>
      <div className='list-wrapper'>
        {books.map((book) => <Book key={book.id} book={book}/>)}
      </div>
      <div className='show-more-button-wrapper'>
        <button className='show-more-button' onClick={handleShowMore}>
          Xem thêm
        </button>
      </div>
    </div>
  )
}

export default BookList