import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './components/App.jsx'
import store from './controller/store.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
