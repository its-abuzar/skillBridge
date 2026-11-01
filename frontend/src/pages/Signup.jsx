import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout, { Field } from './AuthLayout'

function Signup() {
  const [role, setRole] = useState('candidate')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (password.length < 8) return setError('Password must be at least 8 characters.')
    if (password !== confirm) return setError('The two passwords do not match.')
    // TODO: send { name, email, password, role } to the backend to save the new user
    navigate('/login')
  }

  return (
    <AuthLayout>
      <h1>Create your account</h1>
      <p className="sub">It takes about a minute.</p>
      <form onSubmit={handleSubmit}>
        <div className="role" role="group" aria-label="I am a">
          <button type="button" aria-pressed={role === 'candidate'} onClick={() => setRole('candidate')}>
            Job seeker
          </button>
          <button type="button" aria-pressed={role === 'recruiter'} onClick={() => setRole('recruiter')}>
            Recruiter
          </button>
        </div>
        <Field label="Full name" value={name} onChange={setName} placeholder="Ayesha Khan" />
        <Field label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" />
        <Field label="Password" type="password" value={password} onChange={setPassword} placeholder="At least 8 characters" />
        <Field label="Confirm password" type="password" value={confirm} onChange={setConfirm} placeholder="Type it again" />
        {error && <p className="error" role="alert">{error}</p>}
        <button type="submit" className="btn">Create account</button>
      </form>
      <p className="switch">Already registered? <Link to="/login">Log in</Link></p>
    </AuthLayout>
  )
}

export default Signup
