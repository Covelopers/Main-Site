import './App.css'
import Background  from './components/background/background'

function App() {
  return (
    <div className="app-container">
    <div className="content-container">
      <h1 className="title">covelopers</h1>
      <p className="description">
        A startup company made up of university graduates
        utilising AI in various projects to help other graduates.
      </p>
    </div>
    <Background />
  </div>
  )
}

export default App
