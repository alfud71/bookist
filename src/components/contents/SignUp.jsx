import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeId } from './../../store'

function SignUp(props) {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [signUpId, setSignUpId] = useState('')
  const [signUpPw, setSignUpPw] = useState('')
  let dispatch = useDispatch()
  return (
    <div className="signup_box">
      <input
        type="text"
        value={name}
        name="name"
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        value={email}
        name="email"
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="text"
        value={signUpId}
        name="signUpId"
        placeholder="Id"
        onChange={(event) => setSignUpId(event.target.value)}
      />
      <input
        type="password"
        value={signUpPw}
        name="signUpPw"
        placeholder="Password"
        onChange={(event) => setSignUpPw(event.target.value)}
      />
      <button
        className="go_button"
        disabled={!name || !email || !signUpId || !signUpPw}
        onClick={() => {
          navigate(`/main`)
          dispatch(changeId(signUpId))
        }}
      >
        {!name || !email || !signUpId || !signUpPw
          ? 'Please fill in the blank'
          : 'Go!'}
      </button>
    </div>
  )
}

export default SignUp
