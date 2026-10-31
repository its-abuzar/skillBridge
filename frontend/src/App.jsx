
import { useState } from 'react'
import Login from './pages/Login'
import Signup from './pages/signup'
import './App.css'
function App() {
    const [currentPage, setCurrentPage] = useState('login')

    return (
        <>
            {currentPage === 'login' ? (
                <Login onSignupClick={() => setCurrentPage('signup')} />
            ) : (
                <Signup onLoginClick={() => setCurrentPage('login')} />
            )}
        </>
    )
}

export default App
