import React, { useState } from 'react'
import LoremIpsum from 'react-lorem-ipsum'
import { useParams } from 'react-router-dom'
import fakeBook from '../../data/fakeBook'
import Ratings from './Ratings'
import { motion } from 'framer-motion'
export default function BookDetail() {
  const index = useParams()
  const [books] = useState(fakeBook)

  const book = books.find((x) => {
    return x.index == index.index
  })

  return (
    <motion.div
      className="book_detail"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="book_into">
        <img src={book.img} alt="Book" />
        <div className="book_info">
          <h4 className="book_title">{book.title}</h4>
          <span className="book_author">{book.author}</span>
          <Ratings num={3} />
          <LoremIpsum p={2} />
        </div>
      </div>
      <div className="book_desc">
        <LoremIpsum p={10} />
        <LoremIpsum p={10} />
        <LoremIpsum p={10} />
      </div>
    </motion.div>
  )
}
