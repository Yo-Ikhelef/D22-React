import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store'

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </StrictMode>,
)
