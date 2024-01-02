import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function Nav(props) {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/main" title="main" className="active">
            <i>
              <FontAwesomeIcon icon={faHouse} />
            </i>
          </Link>
        </li>
        <li>
          <Link to="/main/list" title="main">
            Dummy Books
          </Link>
        </li>
        <li>
          <Link to="/main/filterlist" title="main">
            Filtering Books
          </Link>
        </li>
        <li>
          <Link to="/book/sorry.." title="main">
            Error Page
          </Link>
        </li>
        {/* {props.menu.map((menuTitle, i) => {
          return (
            <li key={i}>
              <Link to="/main/list">{menuTitle}</Link>
            </li>
          )
        })} */}
        <li>
          <Link to="/book/list" title="main">
            KaKao Books
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
