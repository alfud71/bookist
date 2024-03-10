import React from 'react'
import { Link } from 'react-router-dom'
import Ratings from './Ratings'

function BookListItem(props) {
  return (
    <>
      <li>
        <Link to={`/main/detail/${props.book.index}`} className="book_box">
          <img src={process.env.PUBLIC_URL + props.book.img} alt="Book" />
          <div className="book_desc">
            <b className="book_title">{props.book.title}</b>
            <span className="book_author">{props.book.author}</span>
            <Ratings num={3} />
          </div>
        </Link>
      </li>
    </>
  )
}

export default BookListItem
