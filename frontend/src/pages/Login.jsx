
import { useState } from 'react'
import './Login.css'

function Login({ onSignupClick })  {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        alert('Login form submitted successfully!')

        console.log('Email:', email)
    }

    return (
        <div className="login-page">

            <div className="login-branding-panel">

                <h1>SkillBridge</h1>

                <h2>
                    Welcome Back.
                    <br />
                    Continue Your Journey.
                </h2>

                <p>
                    Your learning journey doesn't stop here.
                    Log in to continue building your skills
                    and achieving your goals.
                </p>

                <div className="login-features">
                    <span>Learn</span>
                    <span>Grow</span>
                    <span>Achieve</span>
                </div>

            </div>

            {/* Right login card */}
            <div className="login-container">

                <h1>Welcome Back!</h1>

                <p>Log in to your SkillBridge account</p>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label>Email Address</label>

                        <input
                            type="email"
                            placeholder="Enter your Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="forgot-password">
                        <a href="/forgot-password">
                            Forgot Password?
                        </a>
                    </div>

                    <button type="submit">
                        Login
                    </button>

                </form>

                <div className="login-signup-link">
                    Don't have an account?
                   <a href="/signup" onClick={(e) => {
                      e.preventDefault()
                      onSignupClick()
                      }}>
                       Sign Up
                      </a>
                </div>

            </div>

        </div>
    )
}

export default Login
