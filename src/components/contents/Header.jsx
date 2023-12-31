import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import LoremIpsum from 'react-lorem-ipsum'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1 className="logo">
        <Link to="/main">Bookist</Link>
      </h1>
      <div>
        {/* <h2>Bookist is a web service that provides a list of books.</h2> */}
        <LoremIpsum p={1} />
      </div>
      <ul>
        <li className="user_name">asdf 🤍</li>
        <li>
          <Link to="/" title="Logout">
            <FontAwesomeIcon icon={faRightFromBracket} />
          </Link>
        </li>
      </ul>
    </header>
  )
}
