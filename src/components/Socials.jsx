

import { InstagramIcon, TwitterIcon, FacebookIcon } from 'lucide-react'
import Link from 'next/link'
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <ul className={`${containerStyles}`}>
      <li className=' flex gap-x-4 '>
        <Link className={`${iconStyles}`} href='/'><InstagramIcon /></Link>
        <Link className={`${iconStyles}`} href='/'><TwitterIcon /></Link>
        <Link className={`${iconStyles}`} href='/'><FacebookIcon /></Link>
      </li>
      
    </ul>
  )
}

export default Socials
