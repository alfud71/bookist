import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fakeBook from '../../data/fakeBook'
import BookListItem from './BookListItem'
import Pagination from '@mui/material/Pagination'
function BookList(props) {
  const [search, setSearch] = useState('')
  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const [books, setBooks] = useState(fakeBook)
  const [updateBooks, setUpdatebooks] = useState()
  const [currentPage, setCurrentPage] = useState(1) // 현재 페이지

  const onclick = (e) => {
    const a = updateBooks.filter((book) => {
      return book.title
        .replace(' ', '')
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase().replace(' ', ''))
    })
    setBooks(a)
  }

  const handleChange = (event, number) => {
    setCurrentPage(number)
  }
  const bookPerPage = 9
  const currentPageLast = currentPage * bookPerPage
  const currentPageFirst = currentPageLast - bookPerPage
  const currentBooks = books.slice(currentPageFirst, currentPageLast)
  const pageNumber = Math.ceil(books.length / bookPerPage)

  useEffect(() => {
    setUpdatebooks(books)
  }, [])

  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="book_list_box"
    >
      <div className="search_area">
        <input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={onChange}
        />
        <button type="button" className="btn_search" onClick={onclick}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <ul className="book_list_area">
        {currentBooks.map((book, i) => {
          return <BookListItem book={book} key={i} />
        })}
      </ul>
      <Pagination
        count={pageNumber}
        showFirstButton
        showLastButton
        onChange={handleChange}
      />
    </motion.div>
  )
}

export default BookList
