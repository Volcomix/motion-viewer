import React from 'react'
import './App.css'

const App = ({ testValue }) => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    Test value: {JSON.stringify(testValue)}
  </div>
)

export default App
