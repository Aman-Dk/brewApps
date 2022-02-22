import React from 'react'
import { Link } from 'react-router-dom'
import Cards from './components/Cards'
import Header from './components/Header'
import './Styles.css'

export default function App(props) {
  return (
    <div className='container'>

      <nav className='header'>
        <Header/>
        <div className='links'>
              <ul>
                  <li className='ml-0'>
                      <Link to="/Trending">24h Trending</Link>
                      </li>
                  <li>
                      <Link to="/Latest-shows">Latest shows</Link>
                      </li>
                  <li>
                      <Link to="/Most-Popular">Most Popular</Link>
                      </li>
                  <li>
                      <Link to="/In-Genesis">In Genesis</Link>
                      </li>
                  <li>
                      <Link to="/In-Temple">In Temple</Link>
                      </li>
                  <li>
                      <Link to="/In-Void">In Void</Link>
                      </li>
                  <li>
                      <Link to="/#BAYC">#BAYC</Link>
                      </li>
              </ul>
          </div>
      </nav>

      <div className='container p-0 m-0'>
        <Cards/>
      </div>
      
    </div>
  )
}
