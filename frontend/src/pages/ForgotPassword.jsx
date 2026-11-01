import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout, { Field } from './AuthLayout'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: ask the backend to send a reset link to this email
    setSent(true)
  }

  return (
    <AuthLayout>
      {sent ? (
        <>
          <h1>Check your inbox</h1>
          <p className="sub">
            If an account exists for <strong>{email}</strong>, a reset link is on its way.
          </p>
          <Link to="/login" className="btn btn-link">Back to log in</Link>
        </>
      ) : (
        <>
          <h1>Reset your password</h1>
          <p className="sub">Enter your email and we will send you a reset link.</p>
          <form onSubmit={handleSubmit}>
            <Field label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" />
            <button type="submit" className="btn">Send reset link</button>
          </form>
          <p className="switch"><Link to="/login">Back to log in</Link></p>
        </>
      )}
    </AuthLayout>
  )
}

export default ForgotPassword
