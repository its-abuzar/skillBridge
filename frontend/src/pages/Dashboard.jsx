import { Link } from 'react-router-dom'
import './Dashboard.css'

// DUMMY DATA for the UI stage. Later this comes from the database through the backend.
const user = { name: 'Ayesha' }
const applications = [
  { role: 'Junior Software Engineer', company: 'Northwind Labs', city: 'Toronto', status: 'Interview' },
  { role: 'Data Analyst Intern', company: 'Brightpath', city: 'London', status: 'Applied' },
  { role: 'Backend Developer', company: 'Helix Systems', city: 'Dubai', status: 'Screening' },
  { role: 'QA Engineer', company: 'Kestrel Software', city: 'Singapore', status: 'Rejected' },
  { role: 'Web Developer', company: 'Loomis & Co', city: 'Remote', status: 'Saved' },
]
const deadlines = [
  { what: 'Helix Systems: upload transcript', when: '3 Nov' },
  { what: 'Brightpath internship closes', when: '8 Nov' },
  { what: 'Scholarship application form', when: '15 Nov' },
]
const matches = [
  { role: 'Python Developer', company: 'Orbital Tech', score: 88 },
  { role: 'Software Engineer', company: 'Fernway', score: 81 },
  { role: 'Database Intern', company: 'Quanta Data', score: 74 },
]

function Dashboard() {
  return (
    <div className="dash">
      <header className="topbar">
        <span className="logo">SkillBridge</span>
        <nav>
          <a href="#applications">Applications</a>
          <a href="#matches">Matches</a>
          <Link to="/login">Log out</Link>
        </nav>
      </header>

      <main className="dash-main">
        <h1>Welcome back, {user.name}.</h1>
        <p className="lead">You have 5 applications, 1 interview and 3 deadlines coming up.</p>

        <div className="dash-grid">
          <section id="applications" className="panel">
            <h2>Your applications</h2>
            <ul className="rows">
              {applications.map((a) => (
                <li key={a.role}>
                  <div>
                    <strong>{a.role}</strong>
                    <span>{a.company}, {a.city}</span>
                  </div>
                  <b className={'status ' + a.status.toLowerCase()}>{a.status}</b>
                </li>
              ))}
            </ul>
          </section>

          <div className="dash-side">
            <section className="panel">
              <h2>Closing soon</h2>
              <ul className="rows">
                {deadlines.map((d) => (
                  <li key={d.what}><span>{d.what}</span><b>{d.when}</b></li>
                ))}
              </ul>
            </section>

            <section id="matches" className="panel sun">
              <h2>Best matches for your CV</h2>
              <ul className="rows">
                {matches.map((m) => (
                  <li key={m.role}>
                    <div><strong>{m.role}</strong><span>{m.company}</span></div>
                    <b className="score">{m.score}%</b>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
