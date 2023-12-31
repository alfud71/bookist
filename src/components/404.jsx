import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="not_found">
      <motion.div
        className="around_box"
        animate={{ scale: [1, 1.5, 1.1] }}
        transition={{ duration: 3, times: [0, 0.2, 1] }}
      >
        <div className="num">
          <b>4</b>
          <span>&#123;&#125;</span>
          <b>4</b>
        </div>

        <p>
          &#123;&#125;&#123;&#125;ps! <br />
        </p>
        <p>-</p>
        <p className="wrong_text">
          SOMETHING WENT WRONG
          <br />
          GO BACK TO HOME
        </p>
        <motion.button
          type="button"
          onClick={() => {
            navigate(-1)
          }}
          whileInView={{
            borderRadius: ['20px'],
            transition: { delay: 0.05 },
          }}
          whileHover={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            height: '60px',
            borderRadius: ['20px', '50px', '100px', '50px', '100%'],
          }}
        >
          BACK
        </motion.button>
      </motion.div>
    </div>
  )
}
