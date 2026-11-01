import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout, { Field } from './AuthLayout'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    // TODO: replace with a real request to the backend (check email + password in the database)
    navigate('/dashboard')
  }

  return (
    <AuthLayout>
      <h1>Log in</h1>
      <p className="sub">Pick up where you left off.</p>
      <form onSubmit={handleSubmit}>
        <Field label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" />
        <Field label="Password" type="password" value={password} onChange={setPassword} placeholder="Your password" />
        {error && <p className="error" role="alert">{error}</p>}
        <Link to="/forgot-password" className="forgot">Forgot your password?</Link>
        <button type="submit" className="btn">Log in</button>
      </form>
      <p className="switch">New to SkillBridge? <Link to="/signup">Create an account</Link></p>
    </AuthLayout>
  )
}

export default Login
