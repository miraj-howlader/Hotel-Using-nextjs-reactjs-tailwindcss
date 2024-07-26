import Link from 'next/link'
import React from 'react'

const links = [
    {path:'/',pathname:'Home'},
    {path:'/',pathname:'Find Hotel'},
    {path:'/',pathname:'About'},
    {path:'/',pathname:'Contact'},
]
const Nav = ({containerStyles,listStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
        <ul className={`${listStyles}`}>
          {links.map((link,index)=>{
            return <li key={index}>
                <Link
                className=' hover:text-orange transition-all duration-300'
                 href={link.path}>{link.pathname}</Link>
            </li>
          })}
        </ul>
      
     
    </nav>
  )
}

export default Nav
