import { useState } from 'react'
import './Auth.css'

// Left panel + right form area shared by Login, Signup and Forgot Password.
export default function AuthLayout({ children }) {
  return (
    <div className="auth">
      <aside className="auth-side">
        <div className="logo">SkillBridge</div>

        <div className="side-copy">
          <h2>Find the jobs your CV already qualifies for.</h2>
          <div className="match-card" aria-hidden="true">
            <div className="match-top">
              <div>
                <strong>Junior Software Engineer</strong>
                <span>Northwind Labs, Toronto</span>
              </div>
              <b className="match-score">82%</b>
            </div>
            <div className="chips">
              <span className="chip yes">Python</span>
              <span className="chip yes">SQL</span>
              <span className="chip yes">Git</span>
              <span className="chip no">Docker</span>
            </div>
            <p>You meet 4 of 5 required skills. Closes 14 Nov.</p>
          </div>
        </div>

        <svg className="bridge" viewBox="0 0 400 150" aria-hidden="true">
          <path d="M0 110 Q100 -20 200 110 Q300 -20 400 110" />
          <line x1="0" y1="110" x2="400" y2="110" />
          {Array.from({ length: 15 }, (_, i) => {
            const x = 25 + i * 25
            if (x % 200 === 0) return null
            const t = (x % 200) / 200
            return <line key={x} x1={x} x2={x} y1={110 - 260 * t * (1 - t)} y2="110" />
          })}
        </svg>
      </aside>

      <main className="auth-main">
        <div className="auth-card">{children}</div>
      </main>
    </div>
  )
}

// One labelled input. Password fields get a show/hide button.
export function Field({ label, type = 'text', value, onChange, placeholder }) {
  const [show, setShow] = useState(false)
  const isPassword = type === 'password'
  return (
    <label className="field">
      <span>{label}</span>
      <div className="field-row">
        <input
          type={isPassword && show ? 'text' : type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required
        />
        {isPassword && (
          <button type="button" className="show" onClick={() => setShow(!show)}>
            {show ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
    </label>
  )
}
