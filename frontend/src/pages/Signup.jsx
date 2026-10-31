
import { useState } from 'react'

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (password.length < 8) {
            alert("Password must be at least 8 characters long")
            return
        }

        if (password !== confirmpassword) {
            alert("Passwords do not match")
            return
        }

        alert("Signup form submitted successfully!")

        console.log("Full Name:", name)
        console.log("Email:", email)
    }

    return (
        <div className="signup-page">

            {/* Left branding section */}
            <div className="branding-panel">
                <h1>SkillBridge</h1>

                <h2>
                    Bridge your skills.
                    <br />
                    Build your future.
                </h2>

                <p>
                    Connect your learning journey with opportunities,
                    skills and growth.
                </p>

                <div className="features">
                    <span>Learn</span>
                    <span>Grow</span>
                    <span>Achieve</span>
                </div>
            </div>

            {/* Right signup card */}
            <div className="signup-container">

                <h1>Create Account</h1>
                <p>Start your journey with SkillBridge</p>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter Your Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

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

                    <div>
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your Password"
                            value={confirmpassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit">
                        Create Account
                    </button>

                </form>
            </div>

        </div>
    )
}

export default Signup
