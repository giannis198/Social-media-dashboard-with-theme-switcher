'use client'

import { ThemeSwitch } from './ThemeSwitch'
import { Separator } from './ui/separator'

const Navbar = () => {
  return (
    <nav className='h-[17rem] space-y-5 rounded-b-3xl bg-VeryPaleBlueTopBg py-10 dark:bg-VeryDarkBlueTopBg'>
      <div className='container items-center justify-between space-y-1 md:flex'>
        <div>
          <h1 className='text-2xl font-bold text-VeryDarkBlue dark:text-white'>
            Social Media Dashboard
          </h1>
          <p className='pb-10 text-base font-bold leading-relaxed  text-DarkGrayishBlue dark:text-DesaturatedBlue '>
            Total Followers: 23,004
          </p>
        </div>

        <div className='pb-5 md:hidden'>
          <Separator className='bg-DarkGrayishBlue opacity-50 ' />
        </div>
        <ThemeSwitch />
      </div>
    </nav>
  )
}

export default Navbar
