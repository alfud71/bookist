import React from 'react'
import Nav from './contents/Nav'
import MainContents from './contents/MainContents'
import Header from './contents/Header'
import { Outlet, useLocation } from 'react-router-dom'

function MainPage(props) {
  const location = useLocation()
  const menu = [
    'Fiction',
    'Poetry/Essay',
    'Humanities',
    'Home/Childcare',
    'Cooking',
  ]
  return (
    <div className="wrap">
      <Header />
      <section>
        <Nav menu={menu} />

        <div className="contents">
          {location.pathname === '/main' ? (
            <MainContents menu={menu} />
          ) : (
            <Outlet></Outlet>
          )}
        </div>
      </section>

      <footer>
        Designed and built by MR.
        <p>If you have any questions, please contact me.</p>
      </footer>
    </div>
  )
}

export default MainPage
