import React from 'react'
import Link from 'next/link'
import DropdownMenu from '../components/DropdownMenu'

function Navbar() {
    return (
        <div className='fixed left-0 -top-3 w-full z-10 backdrop-blur-sm flex md:justify-center justify-between m-auto p-2 text-white'>
            <ul className='flex justify-center items-center'>
                <li className='p-4 mr-10'>
                    <h1 className='font-bold text-2xl text-emerald-300'>🌴Hao Jie</h1>
                </li>
                <li className='p-4 hidden md:block'>
                    <Link href='/'>&#47;&#47; Home</Link>
                </li>
                <li className='p-4 hidden md:block'>
                    <Link href='/#expertise'>&#47;&#47; Expertise</Link>
                </li>
                <li className='p-4 hidden md:block'>
                    <Link href='/#work'>&#47;&#47; Work</Link>
                </li>
                <li className='p-4 hidden md:block'>
                    <Link href='/#connect'>&#47;&#47; Connect</Link>
                </li>
            </ul>
            <div className ='m-4 md:hidden'>
                <DropdownMenu></DropdownMenu>
            </div>
        </div>
    )
}

export default Navbar