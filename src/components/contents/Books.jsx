import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { bookSearch } from '../../api/kakao'
import AipBookListItem from './AipBookListItem'

function Books() {
  const [text, setText] = useState('')
  const [query, setQuery] = useState('')
  const [apiBooks, setApiBooks] = useState()

  useEffect(() => {
    if (query.length > 0) {
      searchHttpHandler(query, true)
    }
    searchHttpHandler('리액트', true)
  }, [query])

  // search 핸들러
  const searchHttpHandler = async (query, reset) => {
    const params = {
      query: query,
      sort: 'recency',
      page: 1,
      size: 20,
    }
    const { data } = await bookSearch(params)
    if (reset) {
      setApiBooks(data.documents)
    } else {
      setApiBooks(apiBooks.concat(data.documents))
    }
    // console.log(data.documents, query)
  }

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      setQuery(text)
    }
  }

  const onClick = (e) => {
    setQuery(text)
  }
  const onTextUpdate = (e) => {
    setText(e.target.value)
  }

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
          name="query"
          className="input_search"
          onKeyDown={onEnter}
          onChange={onTextUpdate}
          value={text}
        />
        <button className="btn_search" onClick={onClick}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <ul className="book_list_area">
        {apiBooks
          ? apiBooks.map((book, i) => {
              return <AipBookListItem book={book} key={i} />
            })
          : ''}
      </ul>
      {/* <Pagination
        totalItems={totalItems}
        currentPage={1}
        pageCount={5}
        itemCountPerPage={50}
      /> */}
    </motion.div>
  )
}

export default Books
