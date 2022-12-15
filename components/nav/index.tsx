import Link from 'next/link'
import React from 'react'

const NavLinks = () => {
  return (
    <ul className={`lg:flex text-white  justify-between space-x-10 text-center font-medium `}>
          <li>
            <Link href={'/service'} className=''>
              Service
            </Link>
          </li>
          <li>
            <Link href={'/contact'}>
              Contact
            </Link>
          </li>
          <li>
            <Link href={'/about'}>
              About
            </Link>
          </li>
        </ul>
  )
}

export default NavLinks