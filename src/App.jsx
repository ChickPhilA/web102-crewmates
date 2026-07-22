import { useState } from 'react'
import { useRoutes } from 'react-router'
import CreateCrewmate from './pages/CreateCrewmate.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="home-center">
        <h1> Welcome to Crewmate Curator! </h1>
        <h3> Ready to create, organize, and send off your own crew into space?
          What kind of adventures will your crew encounter in the wide, vast galaxies out there?
          There will be no one, among us, who won't stop us from these out-of-the-world expeditions!
        </h3>
      </div>
    </>
  )
}

export default App
