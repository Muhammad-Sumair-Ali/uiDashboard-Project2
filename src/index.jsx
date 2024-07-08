import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css"
import App from './components'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
		<App />
    <Toaster/>
 </>
)