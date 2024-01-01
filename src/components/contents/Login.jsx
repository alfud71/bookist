import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { changeId } from './../../store'
function Login(props) {
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  let dispatch = useDispatch()

  return (
    <div className="login_box">
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
          dispatch(changeId(id))
        }}
      >
        {!id || !pw ? 'Please fill in the blank' : 'Go!'}
      </button>
    </div>
  )
}

export default Login
