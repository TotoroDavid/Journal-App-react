import React from 'react'
import ReactDOM from 'react-dom/client'
import { JournalApp } from './JournalApp'
//redux
import { Provider } from 'react-redux'
import { store } from './store/store'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <JournalApp />
    </React.StrictMode>,
  </Provider>
)
