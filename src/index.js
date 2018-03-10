import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

window.renderMotionViewer = pages => {
  ReactDOM.render(<App pages={pages} />, document.getElementById('root'))
}

window.renderMotionViewer({})
registerServiceWorker()
