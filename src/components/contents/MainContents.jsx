import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BookListItem from './BookListItem'
import fakeBook from '../../data/fakeBook'
import recentBook from '../../data/recentBook'
import { motion } from 'framer-motion'
function MainContents(props) {
  const [books] = useState(fakeBook)

  const [recentBooks] = useState(recentBook)
  const shuffledArray = recentBooks.sort(() => Math.random() - 0.5)
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <ul className="book_count_box">
          {props.menu.map((menuTitle, i) => {
            return (
              <li key={i}>
                <Link to="/main/list">
                  <span className="book_count"></span>
                  <b>{menuTitle}</b>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="main_list">
        <div className="book_list">
          <h3>Popular in Books</h3>
          <ul>
            {books.map((book, i) => {
              return <BookListItem book={book} key={i} />
            })}
          </ul>
        </div>
        <div className="book_list">
          <h3>New Releases</h3>
          <ul>
            {shuffledArray.map((book, i) => {
              return <BookListItem book={book} key={i} />
            })}
          </ul>
        </div>
        <div className="book_list">
          <h3>Editorial Picks: Books for a new you</h3>
          <ul>
            {books.map((book, i) => {
              return <BookListItem book={book} key={i} />
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default MainContents
