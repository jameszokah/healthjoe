import Link from 'next/link'
import React from 'react'

const NavLinks = ({mobile,desktop}: { mobile?: boolean, desktop?: boolean}) => {
  return (
    <ul className={`${mobile ? 'flex' : 'hidden'} ${desktop ? 'lg:flex' : 'hidden'}  text-white  justify-between space-x-10 text-center font-medium `}>
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