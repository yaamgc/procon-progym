import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Top from './top.tsx'
import Slide from './slide.tsx'
import HtmlMenu from './AboutMe.tsx'
import App from './App.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

        <App />

    </BrowserRouter>
  </StrictMode>,
)
