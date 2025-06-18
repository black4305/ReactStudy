import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './page/Main'
import ProductList from './page/ProductList'
import ProductDetail from './page/ProductDetail'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [list, setList] = useState()

  useEffect(() => {
    axios
    .get('/bestItem.json')
    .then(res => {
      // console.log('res : ', res.data.list)
      setList(res.data.list)
    })
  }, [])

  return (
    <>
      <Header/>
      <Routes>
        <Route path = '/' element = {<Main/>}></Route>
        <Route path = '/list' element = {<ProductList list = {list}/>}></Route>
        <Route path = '/detail/:num' element = {<ProductDetail list = {list}/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
