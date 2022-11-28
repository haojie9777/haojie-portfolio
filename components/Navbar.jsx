import React from 'react'
import Link from 'next/link'
import DropdownMenu from '../components/DropdownMenu'

function Navbar() {
    return (
        <div className='fixed left-0 -top-3 w-full z-10 backdrop-blur-sm flex md:justify-center justify-between m-auto p-2 text-white'>
            <ul className='flex justify-center items-center'>
                <li className='p-4 mr-10'>
                    <h1 className='font-bold text-2xl text-emerald-300'>Hao Jie</h1>
                </li>   
                <li className='p-4 hidden md:block'>
                    <Link href='/'>&lt; Home &#47;&gt;</Link>
                </li>
                <li className='p-4 hidden md:block'>
                    <Link href='/#skills'>&lt; Skills &#47;&gt;</Link>
                </li>
                <li className='p-4 hidden md:block'>
                    <Link href='/#bio'>&lt; Bio &#47;&gt;</Link>
                </li>
                <li className='p-4 hidden md:block'>
                    <Link href='/#connect'>&lt; Find Me &#47;&gt;</Link>
                </li>
            </ul>
            <div className ='m-4 md:hidden'>
                <DropdownMenu></DropdownMenu>
            </div>
        </div>
    )
}

export default Navbar