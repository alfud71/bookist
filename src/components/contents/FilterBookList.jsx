import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fakeBook from '../../data/fakeBook'
import BookListItem from './BookListItem'

function FilterBookList(props) {
  const [search, setSearch] = useState('')
  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const [books, setBooks] = useState(fakeBook)

  const filterBooks = books.filter((book) => {
    return book.title
      .replace(' ', '')
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase().replace(' ', ''))
  })

  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="book_list_box"
    >
      <div className="search_area">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={onChange}
        />
        <button type="button" className="btn_search" onClick={onclick}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <ul className="book_list_area">
        {filterBooks.map((book, i) => {
          return <BookListItem book={book} key={i} />
        })}
      </ul>
    </motion.div>
  )
}

export default FilterBookList
