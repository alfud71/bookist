import './App.css'

import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import MainPage from './components/MainPage'
import HomePage from './components/HomePage'
import NotFound from './components/404'
import BookDetail from './components/contents/BookDetail'
import BookList from './components/contents/BookList'
import Books from './components/contents/Books'
import FilterBookList from './components/contents/FilterBookList'
function App() {
  const location = useLocation()
  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />}>
            <Route path="detail/:index" element={<BookDetail />} />
            <Route path="list" element={<BookList />} />
            <Route path="filterlist" element={<FilterBookList />} />
          </Route>
          <Route path="/book" element={<MainPage />}>
            <Route path="list" element={<Books />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
