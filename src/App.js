import './App.css'
import Projects from './Pages/projects'
import Jumbo from './components/jumbo'

const App = () => {
  return (
    <>
      <Jumbo />
      <div className="jumbo-container">
        <h1 style={{ margin: 0 }}>Check Out My Apps :</h1>
      </div>
      <Projects />
      <br />
      <br />
    </>
  )
}

export default App
