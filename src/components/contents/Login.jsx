import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
function Login(props) {
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  return (
    <motion.div
      className="login_box"
      // intial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
    >
      <input
        type="text"
        name="id"
        placeholder="Id"
        value={id}
        required
        onChange={(event) => setId(event.target.value)}
      />
      <input
        type="password"
        name="pw"
        value={pw}
        placeholder="Password"
        onChange={(event) => setPw(event.target.value)}
        required
      />
      <button
        className="go_button"
        disabled={!id || !pw}
        onClick={() => {
          navigate(`/main`)
        }}
      >
        {!id || !pw ? 'Please fill in the blank' : 'Go!'}
      </button>
    </motion.div>
  )
}

export default Login
