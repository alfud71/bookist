import React from 'react'
import { Link } from 'react-router-dom'
import Ratings from './Ratings'

function AipBookListItem(props) {
  return (
    <>
      <li>
        <Link to={props.book.url} className="book_box" target="_blick">
          {props.book.thumbnail !== '' ? (
            <img src={props.book.thumbnail} alt={props.book.title} />
          ) : (
            <img src="/image/book/not_imgBook.png" alt={props.book.title} />
          )}
          <div className="book_desc">
            <b className="book_title">{props.book.title}</b>
            <span className="book_author">{props.book.authors[0]}</span>
            <p className="book_contents">{props.book.contents}</p>
          </div>
        </Link>
      </li>
    </>
  )
}

export default AipBookListItem
