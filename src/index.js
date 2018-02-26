import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

window.renderMotionViewer = testValue => {
  ReactDOM.render(
    <App testValue={testValue} />,
    document.getElementById('root'),
  )
}

window.renderMotionViewer('Sloubi')
registerServiceWorker()
