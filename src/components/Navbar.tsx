import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className="container Nav-mai">
        <nav>
            <ul className='Navbar'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/Destination">Top Destination</Link>
                </li>
                <li>
                    <Link href="/Travel">Travel Guide</Link>
                </li>
                <li>
                    <Link href="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
      </div>
      
    </>
  )
}

export default Navbar
