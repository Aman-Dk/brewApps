import React from 'react'
import {MdVerified} from 'react-icons/md'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        
        <strong className='heading links'>
                <Link to="/">Live Spaces</Link>
            </strong>
        
        <br/>
        <div className='description mt-1'>
            <span className=''>
                <MdVerified/>
            </span>
            &nbsp;
            <p>
                All NFTs on Cyber either belong to or were minted by their space creator.
            </p>
        </div>

    </div>
  )
}
