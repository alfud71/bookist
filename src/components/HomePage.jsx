import React, { useState } from 'react'
import Login from './contents/Login'
import SignUp from './contents/SignUp'
import { motion } from 'framer-motion'

function HomePage(props) {
  const [activeTab, setActiveTab] = useState('login')

  return (
    <motion.div
      className="login_page"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Hello Bookist!</h1>
      <div className="login_wrap">
        <ul className="tab_button">
          <li>
            <button
              className={activeTab === 'login' ? 'active' : null}
              onClick={() => setActiveTab('login')}
            >
              Login 🚪
            </button>
          </li>
          <li>
            <button
              className={activeTab === 'signup' ? 'active' : null}
              onClick={() => setActiveTab('signup')}
            >
              Sign up ✍
            </button>
          </li>
        </ul>

        {activeTab === 'login' ? <Login /> : <SignUp />}
      </div>
    </motion.div>
  )
}

export default HomePage
