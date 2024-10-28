import { createRoot } from 'react-dom/client'
import { App } from './app'

import "./assets/styles/reset.scss";
import "./assets/styles/normalize.scss"

createRoot(document.getElementById('root')!).render(
  <App />
)
